# -*- coding: utf-8 -*-
import re, io

SRC = "reference.html"
OUT = "life-workbench.html"
JS_OUT = "app.js"

with io.open(SRC, encoding="utf-8") as f:
    html = f.read()

# Extract the <script> ... </script> body
i = html.index("<script>") + len("<script>")
j = html.index("</script>")
script = html[i:j]

def find_func_span(s, name):
    start = -1
    for sig in ("  function " + name + "(", "  async function " + name + "("):
        start = s.find(sig)
        if start >= 0:
            break
    if start < 0:
        raise RuntimeError("function not found: " + name)
    k = s.index("{", start)
    depth = 0
    p = k
    while p < len(s):
        c = s[p]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return (start, p + 1)
        p += 1
    raise RuntimeError("unbalanced: " + name)

def replace_func(s, name, new_text):
    a, b = find_func_span(s, name)
    return s[:a] + new_text + s[b:]

# ---- New persistence / SDK layer ----
SDK_BLOCK = r'''
  // ===== 资料库在线数据表（__SMART_PAGE__.database SDK）=====
  const DB={records:'faRQQAZO65nI5gQVX2XPEa',habit:'TmgArrVXW3blP0Wp4zO4Nn',habitLog:'f8DOHlPQulccQ2Vthuimul',media:'6V6gJ2VMfDNdD1RuAAnU5q',plan:'rcXuUbBGcct1N8ABvUV0OB',setting:'41AQUHDSPeXYCWTpfpqbvW'};
  const db=(window.__SMART_PAGE__&&window.__SMART_PAGE__.database)||null;
  const TYPE_TO_SELECT={money:'财务',fitness:'健康',planner:'日程',home:'待买'};
  const SELECT_TO_TYPE={'财务':'money','健康':'fitness','日程':'planner','待买':'home'};
  const HABIT_TYPE_TO_SELECT={check:'完成/未完成',counter:'计数累加',number:'填写数值'};
  const SELECT_TO_HABIT_TYPE={'完成/未完成':'check','计数累加':'counter','填写数值':'number'};
  const isServerId=id=>typeof id==='string'&&!/^\d{10,}-/.test(id);
  function extractId(res){if(!res)return null;if(typeof res.id==='string')return res.id;if(typeof res.recordId==='string')return res.recordId;if(res.result&&typeof res.result._id==='string')return res.result._id;if(typeof res._id==='string')return res._id;return null;}
  let habitLogMap={}; let settingsId=null; let syncTimer=null; let syncRegistered=false;

  function showSync(status){
    const b=document.getElementById('syncBanner');
    if(!b)return;
    if(status==='error'){b.hidden=false;b.className='sync-banner error';const t=b.querySelector('#syncText');if(t)t.textContent='数据同步失败，点此重试';}
    else{b.hidden=true;}
  }
  function showSyncError(){showSync('error');toast('数据同步失败，请检查网络后重试');}

  function loadAll(dbId,startCursor,acc,guard){
    acc=acc||[];guard=guard||0;
    if(guard>100)return Promise.resolve(acc);
    return db.query({databaseId:dbId,pageSize:200,startCursor:startCursor}).then(function(r){
      acc=acc.concat(r.results||[]);
      const next=r.nextCursor;
      if(r.hasMore&&next&&next!==startCursor&&(r.results||[]).length)return loadAll(dbId,next,acc,guard+1);
      return acc;
    });
  }
  function deleteBatch(dbId,ids){return Promise.all((ids||[]).map(function(id){return db.deleteRecord({databaseId:dbId,recordId:id});}));}

  function recordToProps(rec){return {类型:{select:TYPE_TO_SELECT[rec.type]||'财务'},日期:{date:rec.date},数据:{text:JSON.stringify(rec.data||{})},示例:{checkbox:!!rec.sample},创建时间:{number:Number(rec.createdAt||Date.now())}};}
  function recordFromState(r){let d={};try{d=JSON.parse(r['数据']||'{}');}catch(e){d={};}return {id:r._id,type:SELECT_TO_TYPE[r['类型']]||'money',date:r['日期'],createdAt:Number(r['创建时间']||Date.now()),sample:!!r['示例'],data:d};}
  async function persistRecord(rec){if(!db)return;const props=recordToProps(rec);if(isServerId(rec.id)){await db.updateRecord({databaseId:DB.records,recordId:rec.id,properties:props});}else{const res=await db.addRecord({databaseId:DB.records,properties:props});const rid=extractId(res);if(rid)rec.id=rid;}}
  async function persistDeleteRecord(rec){if(!db)return;if(isServerId(rec.id))await db.deleteRecord({databaseId:DB.records,recordId:rec.id});}

  function habitToProps(h){return {名称:{text:h.name||''},类型:{select:HABIT_TYPE_TO_SELECT[h.type]||'完成/未完成'},目标:{number:Number(h.target||1)},单位:{text:h.unit||'次'},主题色:{select:h.tone||'sage'},键:{text:h.key||''},示例:{checkbox:!!h.sample},隐藏:{checkbox:!!h.hidden}};}
  function habitFromState(r){return {id:r._id,name:r['名称'],type:SELECT_TO_HABIT_TYPE[r['类型']]||'check',target:Number(r['目标']||1),unit:r['单位']||'次',tone:r['主题色']||'sage',key:r['键']||'',sample:!!r['示例'],hidden:!!r['隐藏'],entries:{}};}
  async function persistHabit(h){if(!db)return;const props=habitToProps(h);if(isServerId(h.id)){await db.updateRecord({databaseId:DB.habit,recordId:h.id,properties:props});}else{const res=await db.addRecord({databaseId:DB.habit,properties:props});const rid=extractId(res);if(rid)h.id=rid;}}
  async function persistDeleteHabit(h){if(!db)return;if(isServerId(h.id))await db.deleteRecord({databaseId:DB.habit,recordId:h.id});const logs=habitLogMap[h.id]||{};const ids=Object.keys(logs).map(function(k){return logs[k];});for(let i2=0;i2<ids.length;i2+=100){await deleteBatch(DB.habitLog,ids.slice(i2,i2+100));}delete habitLogMap[h.id];}
  async function persistHabitEntry(habitId,date,value){if(!db)return;const props={习惯ID:{text:habitId},日期:{date:date},数值:{number:Number(value||0)},示例:{checkbox:false}};const existing=habitLogMap[habitId]&&habitLogMap[habitId][date];if(existing){await db.updateRecord({databaseId:DB.habitLog,recordId:existing,properties:props});}else{const res=await db.addRecord({databaseId:DB.habitLog,properties:props});if(res&&res.id){(habitLogMap[habitId]=habitLogMap[habitId]||{})[date]=res.id;}}}

  function mediaToProps(m){return {名称:{text:m.name||''},类型:{select:m.type||'电影'},状态:{select:m.status||'想看'},星级:{number:Number(m.rating||0)},短评:{text:m.review||''},日期:{date:m.date},封面:{text:m.cover||''},示例:{checkbox:!!m.sample}};}
  function mediaFromState(r){return {id:r._id,name:r['名称'],type:r['类型']||'电影',status:r['状态']||'想看',rating:Number(r['星级']||0),review:r['短评']||'',date:r['日期'],cover:r['封面']||'',sample:!!r['示例']};}
  async function persistMedia(m){if(!db)return;const props=mediaToProps(m);if(isServerId(m.id)){await db.updateRecord({databaseId:DB.media,recordId:m.id,properties:props});}else{const res=await db.addRecord({databaseId:DB.media,properties:props});const rid=extractId(res);if(rid)m.id=rid;}}
  async function persistDeleteMedia(id){if(!db)return;if(isServerId(id))await db.deleteRecord({databaseId:DB.media,recordId:id});}

  function planToProps(p){return {组:{select:p.group||'其他'},名称:{text:p.title||''},说明:{text:p.note||''},完成:{checkbox:!!p.done},键:{text:p.key||''},示例:{checkbox:!!p.sample}};}
  function planFromState(r){return {id:r._id,group:r['组']||'其他',title:r['名称']||'',titleEn:'',note:r['说明']||'',noteEn:'',done:!!r['完成'],sample:!!r['示例']};}
  async function persistPlan(p){if(!db)return;const props=planToProps(p);if(isServerId(p.id)){await db.updateRecord({databaseId:DB.plan,recordId:p.id,properties:props});}else{const res=await db.addRecord({databaseId:DB.plan,properties:props});const rid=extractId(res);if(rid)p.id=rid;}}
  async function persistDeletePlan(id){if(!db)return;if(isServerId(id))await db.deleteRecord({databaseId:DB.plan,recordId:id});}

  async function persistSettings(){if(!db)return;const s=state.settings||{};const payload={budget:Number(s.budget||0),recordsSinceExport:Number(s.recordsSinceExport||0),moneySinceExport:Number(s.moneySinceExport||0),lastExportAt:s.lastExportAt||null,archiveFilter:s.archiveFilter||'all',moneyFilter:s.moneyFilter||'all',plannerFilter:s.plannerFilter||'all',shoppingFilter:s.shoppingFilter||'pending',mediaView:s.mediaView||'wall',mediaStatusFilter:String(s.mediaStatusFilter||'0'),hiddenHabitKeys:s.hiddenHabitKeys||[],brand:s.brand||{},fitnessProfile:s.fitnessProfile||{},drafts:s.drafts||{}};const props={键:{text:'main'},值:{text:JSON.stringify(payload)}};if(settingsId){await db.updateRecord({databaseId:DB.setting,recordId:settingsId,properties:props});}else{const res=await db.addRecord({databaseId:DB.setting,properties:props});if(res&&res.id)settingsId=res.id;}}

  async function seedSamples(){
    await Promise.all(state.records.map(persistRecord));
    await Promise.all(state.habits.map(persistHabit));
    const logTasks=[];
    state.habits.forEach(function(h){const e=h.entries||{};Object.keys(e).forEach(function(date){logTasks.push(persistHabitEntry(h.id,date,Number(e[date]||0)));});});
    await Promise.all(logTasks);
    await Promise.all(state.mediaItems.map(persistMedia));
    await Promise.all((state.settings.weeklyPlan||[]).map(persistPlan));
    await persistSettings();
  }
  async function rebuildAll(){
    const tables=[DB.records,DB.habit,DB.habitLog,DB.media,DB.plan,DB.setting];
    for(let t=0;t<tables.length;t++){const rows=await loadAll(tables[t]);const ids=rows.map(function(r){return r._id;});for(let i2=0;i2<ids.length;i2+=100){await deleteBatch(tables[t],ids.slice(i2,i2+100));}}
    settingsId=null;habitLogMap={};
    await seedSamples();
  }

  async function loadFromServer(){
    if(!db){dbReady=false;return;}
    try{
      showSync('loading');
      const recs=await loadAll(DB.records);
      const habits=await loadAll(DB.habit);
      const logs=await loadAll(DB.habitLog);
      const media=await loadAll(DB.media);
      const plans=await loadAll(DB.plan);
      const setRows=await loadAll(DB.setting);
      const setRec=setRows.find(function(r){return r['键']==='main';})||null;
      const empty=!recs.length&&!habits.length&&!media.length&&!plans.length;
      if(empty){ await seedSamples(); dbReady=true; showSync('synced'); renderAll(); restoreDrafts(); return; }
      state.records=recs.map(recordFromState);
      state.habits=habits.map(habitFromState);
      habitLogMap={};
      logs.forEach(function(l){const hid=l['习惯ID'],date=l['日期'];if(!habitLogMap[hid])habitLogMap[hid]={};(habitLogMap[hid])[date]=l._id;const h=state.habits.find(function(x){return x.id===hid;});if(h)h.entries[date]=Number(l['数值']||0);});
      if(setRec&&setRec['值']){try{const sp=JSON.parse(setRec['值']||'{}');if(sp.hiddenHabitKeys&&sp.hiddenHabitKeys.length){state.habits=state.habits.filter(function(h){return !h.key||sp.hiddenHabitKeys.indexOf(h.key)<0;});}}catch(e){}}
      state.mediaItems=media.map(mediaFromState);
      state.settings.weeklyPlan=plans.map(planFromState);
      if(setRec&&setRec['值']){try{const p=JSON.parse(setRec['值']||'{}');state.settings=Object.assign(state.settings,p);}catch(e){}}
      if(setRec)settingsId=setRec._id;
      dbReady=true;showSync('synced');renderAll();restoreDrafts();
    }catch(err){console.error('[load]',err);dbReady=false;showSync('error');}
  }
  function registerSync(){if(!db||typeof db.onUpdated!=='function')return;if(syncRegistered)return;syncRegistered=true;db.onUpdated(function(payload){const ids=(payload&&payload.databaseIds)||[];if(ids.indexOf(DB.records)>=0||ids.indexOf(DB.habit)>=0||ids.indexOf(DB.habitLog)>=0||ids.indexOf(DB.media)>=0||ids.indexOf(DB.plan)>=0||ids.indexOf(DB.setting)>=0){if(syncTimer)clearTimeout(syncTimer);syncTimer=setTimeout(function(){loadFromServer();},600);}});}
  // 注：本页采用手动 SDK 读写 + 自建渲染，不依赖 data-sp-bindable 声明式绑定；页面与数据表的关联由 import_html.py --databases 在服务端登记。
'''

NEW_LOADSTATE = "  function loadState(){ return makeInitialState(); }"
NEW_SAVESTATE = (
"  function saveState(showSaved=false){\n"
"    document.getElementById('storageAlert').hidden=true;\n"
"    document.querySelector('.save-state')?.classList.remove('error');\n"
"    const txt=document.getElementById('saveText');\n"
"    if(txt)txt.textContent= dbReady ? '已同步云端' : '已保存（本地）';\n"
"    if(showSaved) pulseSaved();\n"
"    return true;\n"
"  }"
)
NEW_ADDRECORD = (
"  async function addRecord(type,date,data){\n"
"    if(!db)return true;\n"
"    const rec={id:uid(),type,date:date||isoDate(),createdAt:Date.now(),sample:false,data};\n"
"    state.records.push(rec);\n"
"    state.settings.recordsSinceExport=Number(state.settings.recordsSinceExport||0)+1;\n"
"    if(type==='money') state.settings.moneySinceExport=Number(state.settings.moneySinceExport||0)+1;\n"
"    try{ await persistRecord(rec); }catch(e){ showSyncError(); return false; }\n"
"    const saved=saveState();renderAll();\n"
"    if(!saved)return false;\n"
"    toast('已保存到线上');\n"
"    return true;\n"
"  }"
)
NEW_DELETERECORD = (
"  async function deleteRecord(id){const target=state.records.find(r=>r.id===id);if(!target||!confirm(LANG==='en'?`Delete \\\"${titleFor(target)}\\\"? This cannot be undone.`:`确定删除\\\"${titleFor(target)}\\\"吗？删除后无法撤回。`))return;state.records=state.records.filter(r=>r.id!==id);try{ await persistDeleteRecord(target); }catch(e){ showSyncError(); return; }const saved=saveState();renderAll();if(saved)toast('记录已删除');}"
)
NEW_UPDATEHABIT = (
"  async function updateHabit(id,operation,value){const h=state.habits.find(x=>x.id===id);if(!h)return;const today=isoDate(),current=Number(h.entries[today]||0);if(operation==='plus')h.entries[today]=current+1;if(operation==='minus')h.entries[today]=Math.max(0,current-1);if(operation==='toggle')h.entries[today]=habitDone(h)?0:1;if(operation==='quick')h.entries[today]=habitDone(h)?0:Number(h.target||1);if(operation==='number')h.entries[today]=clamp(Number(value||0),0,9999);try{ await persistHabitEntry(h.id,today,Number(h.entries[today]||0)); }catch(e){ showSyncError(); return; }const justDone=habitDone(h),saved=saveState();renderAll();if(justDone){celebrate();const name=HABIT_DEFS.some(def=>def.key===h.key)||h.sample?translateText(h.name):h.name;toast(LANG==='en'?`${name} completed — nicely done`:`${h.name}，完成得漂亮`);}}"
)
NEW_TOGGLETASK = (
"  async function toggleTask(id){const task=state.records.find(r=>r.id===id&&r.type==='planner');if(!task)return;task.data.done=!task.data.done;try{ await persistRecord(task); }catch(e){ showSyncError(); return; }const saved=saveState();renderAll();if(saved&&task.data.done){celebrate();toast('完成一项，心里轻一点');}}"
)
NEW_INIT = (
"  function init(){const now=new Date(),weekdays=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];document.getElementById('todayLabel').textContent=LANG==='en'?new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',weekday:'long'}).format(now):`${now.getMonth()+1} 月 ${now.getDate()} 日 · ${weekdays[now.getDay()]}`;document.getElementById('corruptAlert').hidden=true;setDateDefaults();updateMoneyCategories();restoreDrafts();bindForms();bindEvents();renderAll();switchView(document.getElementById(`view-${location.hash.slice(1)}`)?location.hash.slice(1):'dashboard');registerSync();loadFromServer();}"
)
NEW_BINDFORMS = (
"  function bindForms(){\n"
"    document.querySelectorAll('form[data-draft]').forEach(form=>form.addEventListener('input',()=>{state.drafts[form.dataset.draft]=serializeForm(form);try{localStorage.setItem('richangji-draft-'+(form.dataset.draft||''),JSON.stringify(state.drafts[form.dataset.draft]));}catch(e){}const saved=saveState(true);const status=document.querySelector(`[data-draft-for=\"${form.dataset.draft}\"]`);if(status){status.textContent=saved?'草稿已保存':'草稿保存失败';if(saved)setTimeout(()=>status.textContent='草稿自动保存',900);}}));\n"
"    document.getElementById('moneyForm').addEventListener('change',e=>{if(e.target.name==='flow')updateMoneyCategories();});\n"
"    document.getElementById('moneyForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));if(!(Number(data.amount)>0))return toast('请输入有效金额');addRecord('money',data.date,{flow:data.flow,amount:Number(data.amount),category:data.category,note:data.note.trim()}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});\n"
"    document.getElementById('fitnessForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));if(!(Number(data.weight)>0))return toast('请记录今天的体重');addRecord('fitness',data.date,{weight:Number(data.weight),bodyFat:data.bodyFat?Number(data.bodyFat):null,calories:Number(data.calories||0),duration:Number(data.duration||0),note:data.note.trim()}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});\n"
"    document.getElementById('plannerForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));addRecord('planner',data.date,{title:data.title.trim(),time:data.time,priority:data.priority,list:data.list,note:data.note.trim(),remind:data.remind==='1',done:false}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});\n"
"    document.getElementById('homeForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));addRecord('home',isoDate(),{name:data.name.trim(),quantity:data.quantity.trim(),category:data.category,price:Number(data.price||0),priority:data.priority,note:data.note.trim(),bought:false}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});\n"
"    document.getElementById('mediaCoverInput').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;if(file.size>12*1024*1024){toast('封面图片请控制在 12MB 以内');e.target.value='';return;}try{pendingMediaCover=await compressCover(file);const preview=document.getElementById('mediaCoverPreview');preview.style.backgroundImage=`url(${pendingMediaCover})`;preview.closest('.cover-upload').classList.add('has-cover');toast('封面已压缩，可以保存了');}catch(error){toast(error.message);resetMediaCover();}});\n"
"    document.getElementById('mediaForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const item={id:uid(),name:data.name.trim(),type:data.type,status:data.status,rating:Number(data.rating||0),review:data.review.trim(),date:data.date,cover:pendingMediaCover,sample:false};state.mediaItems.push(item);persistMedia(item).then(ok=>{saveState(true);renderAll();if(ok){clearDraft(e.currentTarget);resetMediaCover();toast('已加入书影音清单');}else{showSyncError();}});});\n"
"    document.getElementById('habitTypeSelect').addEventListener('change',e=>{const form=document.getElementById('habitSettingsForm'),isCheck=e.target.value==='check';form.elements.target.value=isCheck?'1':form.elements.target.value;form.elements.unit.value=isCheck?'次':form.elements.unit.value;document.getElementById('habitTargetFields').classList.toggle('is-check',isCheck);});\n"
"    document.getElementById('habitSettingsForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget)),isCheck=data.type==='check';const habit={id:uid(),key:`custom-${uid()}`,name:data.name.trim(),type:data.type,target:isCheck?1:Math.max(.1,Number(data.target||1)),unit:isCheck?'次':data.unit.trim()||'次',tone:data.tone,entries:{},sample:false};state.habits.push(habit);persistHabit(habit).then(ok=>{saveState();renderAll();renderHabitManageList();if(ok){e.currentTarget.reset();document.getElementById('habitTypeSelect').dispatchEvent(new Event('change'));toast('新习惯已加入');}else showSyncError();});});\n"
"    document.getElementById('planSettingsForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const plan={id:uid(),group:data.group,title:data.title.trim(),note:data.note.trim()||'按自己的节奏完成',done:false,sample:false};state.settings.weeklyPlan.push(plan);persistPlan(plan).then(ok=>{saveState();renderFitness();renderPlanManageList();if(ok)toast('新计划已加入');else showSyncError();});});\n"
"    document.getElementById('fitnessProfileForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));state.settings.fitnessProfile=Object.assign(state.settings.fitnessProfile,{height:Number(data.height),target:Number(data.target),age:Number(data.age),sex:data.sex,activity:Number(data.activity)});persistSettings().then(ok=>{saveState();renderFitness();closeFitnessProfile();if(ok)toast('目标设置已更新');else showSyncError();});});\n"
"  }"
)
NEW_BINDEVENTS = (
"  function bindEvents(){\n"
"    document.getElementById('brandSettingsBtn').addEventListener('click',openBrandSettings);\n"
"    document.getElementById('brandForm').addEventListener('input',updateBrandPreview);\n"
"    document.getElementById('brandForm').addEventListener('submit',event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));state.settings.brand={name:data.name.trim()||'日常集',avatar:data.avatar.trim()||'日',tagline:data.tagline.trim()||'生活有迹可循',theme:data.theme||'plum'};persistSettings().then(ok=>{saveState();applyBrand();closeBrandSettings();if(ok)toast('工作台外观已更新');else showSyncError();});});\n"
"    document.getElementById('brandSettings').addEventListener('click',event=>{if(event.target.id==='brandSettings')closeBrandSettings();});\n"
"    document.getElementById('habitSettings').addEventListener('click',event=>{if(event.target.id==='habitSettings')closeHabitSettings();});\n"
"    document.getElementById('planSettings').addEventListener('click',event=>{if(event.target.id==='planSettings')closePlanSettings();});\n"
"    document.getElementById('fitnessProfileSettings').addEventListener('click',event=>{if(event.target.id==='fitnessProfileSettings')closeFitnessProfile();});\n"
"    document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeBrandSettings();closeHabitSettings();closePlanSettings();closeFitnessProfile();}});\n"
"    document.addEventListener('click',event=>{\n"
"      const nav=event.target.closest('[data-nav]');if(nav)switchView(nav.dataset.nav);\n"
"      const quick=event.target.closest('[data-quick]');if(quick){switchView(quick.dataset.quick);setTimeout(()=>document.querySelector(`#view-${quick.dataset.quick} input:not([type=\\\"radio\\\"])`)?.focus(),200);}\n"
"      const action=event.target.closest('[data-action]');if(!action)return;const id=action.dataset.id,type=action.dataset.action;\n"
"      if(type==='retry-sync'){loadFromServer();return;}\n"
"      if(type==='delete')deleteRecord(id);\n"
"      if(type==='toggle-task')toggleTask(id);\n"
"      if(type==='habit-plus')updateHabit(id,'plus');if(type==='habit-minus')updateHabit(id,'minus');if(type==='habit-toggle')updateHabit(id,'toggle');if(type==='habit-quick')updateHabit(id,'quick');\n"
"      if(type==='toggle-plan'){const item=state.settings.weeklyPlan.find(x=>x.id===id);if(item){item.done=!item.done;persistPlan(item).then(ok=>{saveState();renderFitness();if(ok&&item.done)celebrate();});}}\n"
"      if(type==='delete-habit-custom'){const habit=state.habits.find(h=>h.id===id);if(habit&&confirm(LANG==='en'?`Delete the habit \\\"${habit.name}\\\" and all of its history?`:`确定删除习惯\\\"${habit.name}\\\"吗？历史打卡也会一起删除。`)){state.habits=state.habits.filter(h=>h.id!==id);if(HABIT_DEFS.some(def=>def.key===habit.key)){state.settings.hiddenHabitKeys=[...new Set([...(state.settings.hiddenHabitKeys||[]),habit.key])];}persistDeleteHabit(habit).then(ok=>{saveState();renderAll();renderHabitManageList();if(ok)toast('习惯已删除');else showSyncError();});}}\n"
"      if(type==='delete-plan'){const item=state.settings.weeklyPlan.find(x=>x.id===id);if(item&&confirm(LANG==='en'?`Delete the plan \\\"${item.title}\\\"?`:`确定删除计划\\\"${item.title}\\\"吗？`)){state.settings.weeklyPlan=state.settings.weeklyPlan.filter(x=>x.id!==id);persistDeletePlan(item.id).then(ok=>{saveState();renderFitness();renderPlanManageList();if(ok)toast('计划已删除');else showSyncError();});}}\n"
"      if(type==='toggle-shopping'){const item=state.records.find(r=>r.id===id&&r.type==='home');if(item){item.data.bought=!item.data.bought;item.data.boughtDate=item.data.bought?isoDate():null;persistRecord(item).then(ok=>{saveState();renderAll();if(ok&&item.data.bought){celebrate();toast('买到了，已移入完成');}else if(!ok)showSyncError();});}}\n"
"      if(type==='delete-media'){const item=state.mediaItems.find(media=>media.id===id);if(item&&confirm(LANG==='en'?`Remove \\\"${item.name}\\\" from the list?`:`确定从清单中删除\\\"${item.name}\\\"吗？`)){state.mediaItems=state.mediaItems.filter(media=>media.id!==id);persistDeleteMedia(id).then(ok=>{saveState();renderMedia();if(ok)toast('已从书影音清单移除');else showSyncError();});}}\n"
"      if(type==='open-habit-settings')openHabitSettings();if(type==='close-habit-settings')closeHabitSettings();if(type==='open-plan-settings')openPlanSettings();if(type==='close-plan-settings')closePlanSettings();if(type==='open-fitness-profile')openFitnessProfile();if(type==='close-fitness-profile')closeFitnessProfile();\n"
"      if(type==='export-backup')exportBackup();if(type==='open-import')document.getElementById('importFile').click();if(type==='export-money')exportExcel('money');if(type==='export-fitness')exportExcel('fitness');if(type==='close-brand')closeBrandSettings();if(type==='reset-brand'){state.settings.brand={name:'日常集',avatar:'日',tagline:'生活有迹可循',theme:'plum'};persistSettings().then(()=>{saveState();applyBrand();openBrandSettings();toast('已恢复默认外观');});}\n"
"    });\n"
"    document.addEventListener('change',event=>{if(event.target.dataset.action==='habit-number')updateHabit(event.target.dataset.id,'number',event.target.value);});\n"
"    document.getElementById('budgetInput').addEventListener('change',e=>{state.settings.budget=Math.max(0,Number(e.target.value||0));persistSettings().then(ok=>{saveState();renderAll();if(ok)toast('月度预算已更新');else showSyncError();});});\n"
"    document.getElementById('moneyFilter').addEventListener('change',e=>{state.settings.moneyFilter=e.target.value;saveState();renderMoney();persistSettings();});\n"
"    document.getElementById('plannerFilters').addEventListener('click',e=>{const b=e.target.closest('[data-planner-filter]');if(!b)return;state.settings.plannerFilter=b.dataset.plannerFilter;saveState();renderPlanner();persistSettings();});\n"
"    document.getElementById('shoppingFilters').addEventListener('click',e=>{const b=e.target.closest('[data-shopping-filter]');if(!b)return;state.settings.shoppingFilter=b.dataset.shoppingFilter;saveState();renderHome();persistSettings();});\n"
"    document.getElementById('archiveFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;state.settings.archiveFilter=b.dataset.filter;saveState();renderArchive();persistSettings();});\n"
"    document.querySelectorAll('[data-media-view]').forEach(button=>button.addEventListener('click',()=>{state.settings.mediaView=button.dataset.mediaView;saveState();renderMedia();persistSettings();}));\n"
"    document.getElementById('mediaStatusFilter').addEventListener('change',e=>{state.settings.mediaStatusFilter=e.target.value;saveState();renderMedia();persistSettings();});\n"
"    document.getElementById('mediaRatingFilter').addEventListener('change',e=>{state.settings.mediaRatingFilter=Number(e.target.value);saveState();renderMedia();persistSettings();});\n"
"    document.getElementById('clearSamplesBtn').addEventListener('click',()=>{const recordSamples=state.records.filter(r=>r.sample).length,mediaSamples=state.mediaItems.filter(item=>item.sample).length,sampleCount=recordSamples+mediaSamples;if(!sampleCount&&!state.habits.some(h=>h.sample))return;if(!confirm(`将清空 ${sampleCount} 条示例记录和示例打卡，你自己的内容会保留。是否继续？`))return;state.records=state.records.filter(r=>!r.sample);state.mediaItems=state.mediaItems.filter(item=>!item.sample);state.habits.forEach(h=>{if(h.sample){h.entries={};h.sample=false;}});state.settings.weeklyPlan=DEFAULT_PLAN.map(x=>({...x}));rebuildAll().then(ok=>{renderAll();if(ok)toast('示例内容已清空');else showSyncError();});});\n"
"    ['exportBtn'].forEach(id=>document.getElementById(id).addEventListener('click',exportBackup));document.getElementById('importBtn').addEventListener('click',()=>document.getElementById('importFile').click());document.getElementById('importFile').addEventListener('change',e=>{const file=e.target.files[0];if(file)importBackup(file);e.target.value='';});\n"
"  }"
)
NEW_IMPORTBACKUP = (
"  async function importBackup(file){try{const candidate=normalizeState(JSON.parse(await file.text()));if(!confirm(`将导入 ${candidate.records.length} 条记录，并替换当前数据。是否继续？`))return;state=candidate;state.settings.recordsSinceExport=0;state.settings.moneySinceExport=0;dataCorrupted=false;document.getElementById('corruptAlert').hidden=true;await rebuildAll();renderAll();restoreDrafts();toast('备份导入成功');}catch(error){toast(error.message||'导入失败，请检查备份文件');}}"
)
NEW_CLEARDRAFT = (
"  function clearDraft(form){const k='richangji-draft-'+(form.dataset.draft||'');try{localStorage.removeItem(k);}catch(e){}delete state.drafts[form.dataset.draft];form.reset();setDateDefaults();updateMoneyCategories();saveState();}"
)
NEW_RESTOREDRAFTS = (
"  function restoreDrafts(){document.querySelectorAll('form[data-draft]').forEach(form=>{const name=form.dataset.draft;let draft=state.drafts[name];if(!draft){try{draft=JSON.parse(localStorage.getItem('richangji-draft-'+name)||'null');}catch(e){}}if(!draft)return;Object.entries(draft).forEach(([nm,value])=>form.querySelectorAll(`[name=\"${CSS.escape(nm)}\"]`).forEach(field=>{if(field.type==='radio')field.checked=field.value===value;else if(field.type==='checkbox')field.checked=Boolean(value);else field.value=value;}));});updateMoneyCategories();}"
)

# Apply replacements
script = script.replace("  const STORAGE_KEY = 'richangji-state-v1';\n", "  // 存储已迁移至资料库在线数据表（window.__SMART_PAGE__.database SDK）\n")
script = script.replace("  let state=loadState();\n", "  let state=makeInitialState();\n  let dbReady=false;\n")

script = replace_func(script, "loadState", NEW_LOADSTATE)
script = replace_func(script, "saveState", NEW_SAVESTATE)
script = replace_func(script, "addRecord", NEW_ADDRECORD)
script = replace_func(script, "deleteRecord", NEW_DELETERECORD)
script = replace_func(script, "updateHabit", NEW_UPDATEHABIT)
script = replace_func(script, "toggleTask", NEW_TOGGLETASK)
script = replace_func(script, "init", NEW_INIT)
script = replace_func(script, "bindForms", NEW_BINDFORMS)
script = replace_func(script, "bindEvents", NEW_BINDEVENTS)
script = replace_func(script, "importBackup", NEW_IMPORTBACKUP)
script = replace_func(script, "clearDraft", NEW_CLEARDRAFT)
script = replace_func(script, "restoreDrafts", NEW_RESTOREDRAFTS)

# Insert SDK block after the uid line
uid_line = "  const uid = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;"
assert uid_line in script, "uid line not found"
script = script.replace(uid_line, uid_line + "\n" + SDK_BLOCK, 1)

# 按契约 §1：databaseId 必须硬编为字符串字面量（先替换较长前缀避免 DB.habit 误伤 DB.habitLog）
for _a, _b in [('DB.habitLog', "'f8DOHlPQulccQ2Vthuimul'"), ('DB.records', "'faRQQAZO65nI5gQVX2XPEa'"), ('DB.habit', "'TmgArrVXW3blP0Wp4zO4Nn'"), ('DB.media', "'6V6gJ2VMfDNdD1RuAAnU5q'"), ('DB.plan', "'rcXuUbBGcct1N8ABvUV0OB'"), ('DB.setting', "'41AQUHDSPeXYCWTpfpqbvW'")]:
    script = script.replace(_a, _b)

# Inject sync banner + CSS into body
banner = '<div id="syncBanner" class="sync-banner" hidden><span class="sync-dot"></span><span id="syncText">数据同步失败</span><button type="button" data-action="retry-sync">重试</button></div>'
html = html[:i] + script + html[j:]
marker = '<div class="app-shell">'
assert marker in html, "app-shell not found"
html = html.replace(marker, marker + banner, 1)

css = """
.sync-banner{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:80;display:flex;align-items:center;gap:10px;background:#b44d43;color:#fff;padding:10px 14px;border-radius:14px;box-shadow:0 10px 30px rgba(63,48,36,.22);font-size:14px;max-width:90vw}
.sync-banner[hidden]{display:none}
.sync-banner button{background:#fff;color:#b44d43;border:none;border-radius:10px;padding:6px 14px;font-weight:600;cursor:pointer}
.sync-dot{width:8px;height:8px;border-radius:50%;background:#fff;opacity:.9}
"""
html = html.replace("</style>", css + "</style>", 1)

with io.open(OUT, "w", encoding="utf-8") as f:
    f.write(html)
with io.open(JS_OUT, "w", encoding="utf-8") as f:
    f.write(script)

print("assembled", OUT, "script bytes", len(script))
