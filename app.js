
(() => {
  'use strict';

  const LANG_PARAM = new URL(location).searchParams.get('lang');
  const LANG = LANG_PARAM === 'en' ? 'en' : 'zh';
  document.documentElement.lang = LANG;
  const EN_I18N = {
    "日常集 · 生活工作台":"Daily Atlas · Life Workbench","日常集——把财务、习惯、健康、日程与待买清单安放在一个地方。":"Daily Atlas brings your finances, habits, health, schedule, and shopping list into one calm place.",
    "日":"D","日常集":"Daily Atlas","生活工作台":"Life Workbench","生活有迹可循":"A life you can trace","自定义":"Customize","自定义工作台外观":"Customize workbench appearance","主导航":"Main navigation","手机导航":"Mobile navigation","语言 / Language":"Language",
    "今日总览":"Today","生活模块":"LIFE","记账理财":"Money","习惯健康":"Habits & Health","减脂健身":"Fitness","日程统筹":"Planner","待买清单":"Shopping List","书影音":"Media Log","数据":"DATA","时光档案":"Life Archive",
    "本机安全保存":"Saved safely on this device","每次修改立即保存；换设备前请导出备份。":"Every change is saved instantly. Export a backup before switching devices.","距备份提醒还有 20 条":"20 entries until the next backup reminder","今天，慢慢来":"Take today at your own pace","已自动保存":"Autosaved","保存失败":"Save failed","清空示例":"Clear samples","导入":"Import","导出备份":"Export backup",
    "数据暂时存不下了":"Your data could not be saved","请先导出备份，再清理浏览器空间。刚才的修改仍保留在当前页面。":"Export a backup first, then free up browser storage. Your latest changes are still available on this page.","发现本地数据损坏":"Corrupted local data found","已为你打开安全空白页，请导入之前的备份恢复。":"A safe blank workspace has been opened. Import a previous backup to restore your data.","导入备份":"Import backup","该给生活存个档了":"Time to archive your life","新增记录已达到 20 条，建议现在导出一份备份。":"You have added 20 entries. We recommend exporting a backup now.","立即导出":"Export now",
    "今日生活指数":"TODAY'S LIFE SCORE","三件要事，一点运动，留一笔清楚账。":"Three priorities, a little movement, and one clear entry.","快速开始":"QUICK START","记下一件小事":"Capture one small thing","输入时自动保存":"Saved as you type","记一笔":"Add transaction","支出或收入":"Expense or income","排日程":"Plan task","待办与提醒":"Tasks and reminders","记体重":"Log weight","减脂趋势":"Fitness trend","待买物品":"Shopping item","采购清单":"Shopping list",
    "本月支出":"Monthly spending","预算余量充足":"Plenty of budget left","今日习惯":"Today's habits","从一件小事开始":"Start with one small thing","今日待办":"Today's tasks","0 件":"0 tasks","节奏刚刚好":"A comfortable pace","今日节奏":"TODAY'S RHYTHM","待办清单":"Task list","查看全部":"View all","连续发生":"KEEP IT GOING","习惯打卡":"Habit check-in","管理":"Manage","生活脉络":"LIFE THREAD","最近记录":"Recent entries","进入档案":"Open archive","轻提醒":"GENTLE NOTE","规律不是把每天塞满，而是知道什么值得留下。":"Routine is not about filling every day. It is about knowing what is worth keeping.","根据你的记录生成":"Generated from your entries",
    "导出 Excel":"Export Excel","收支手账":"MONEY JOURNAL","记一笔账":"Add a transaction","草稿自动保存":"Draft autosaved","草稿已保存":"Draft saved","草稿保存失败":"Draft save failed","支出":"Expense","收入":"Income","金额":"Amount","分类":"Category","日期":"Date","备注":"Note","这笔钱花在了哪里":"What was this money for?","记下这笔":"Save transaction","本月收入":"Monthly income","本月剩余":"Monthly balance","月度对比":"MONTHLY COMPARISON","暂无对比":"No comparison yet","有了上月数据后，这里会显示变化":"Changes will appear once last month's data is available","月度预算":"MONTHLY BUDGET","花得明白，不必紧绷":"Spend with clarity, not pressure","预算 ¥":"Budget ¥","已使用 0%":"0% used","剩余 ¥0":"¥0 left","消费结构":"SPENDING BREAKDOWN","钱花在了哪里":"Where your money went","流水":"TRANSACTIONS","最近账目":"Recent transactions","全部分类":"All categories","消费结构饼图":"Spending breakdown pie chart","暂无支出":"No spending yet",
    "吃饭":"Dining","交通":"Transport","购物":"Shopping","娱乐":"Entertainment","房租":"Rent","看病":"Healthcare","学习":"Learning","其他":"Other","工资":"Salary","奖金":"Bonus","兼职":"Side income","理财":"Investments",
    "今天打卡":"TODAY'S CHECK-IN","完成一点，就算前进":"Every small completion counts","每次点击立即保存":"Every click saves instantly","新增习惯":"Add habit","今日完成":"Completed today","最佳连续":"Best streak","0 天":"0 days","近 30 天完成率":"30-day completion","30 天热力图":"30-DAY HEATMAP","坚持，是有形状的":"Consistency has a shape","手机可横向滑动":"Swipe horizontally on mobile","喝水":"Drink water","睡觉":"Sleep","运动":"Exercise","看书":"Read","冥想":"Meditate","杯":"cups","小时":"hours","次":"times","分钟":"minutes","页":"pages","目标":"Target","连续":"streak","已完成":"Completed","待完成":"To do","待打卡":"Not checked in","未完成":"Not completed","删除习惯":"Delete habit",
    "目标设置":"Goal settings","每日记录":"DAILY LOG","体重与体脂":"Weight & body fat","体重 kg":"Weight kg","体脂率 %":"Body fat %","摄入热量 kcal":"Calories kcal","运动分钟":"Exercise minutes","睡眠、饮食或身体感受":"Sleep, meals, or how your body feels","保存今日数据":"Save today's data","当前体重":"Current weight","距离目标":"To goal","10 斤":"5.0 kg","当前 BMI":"Current BMI","目标进度":"GOAL PROGRESS","稳稳向 55 kg 前进":"Moving steadily toward 55 kg","起点 60 kg":"Start 60 kg","目标 55 kg":"Goal 55 kg","体重趋势":"WEIGHT TREND","日波动与 7 天平均":"Daily changes and 7-day average","体重":"Weight","7 日平均":"7-day average","本周计划":"WEEKLY PLAN","运动与三餐安排":"Movement and meal plan","新增计划":"Add plan","身体日志":"BODY LOG","再记录一天，就能看到趋势":"Log one more day to see your trend","删除计划":"Delete plan",
    "力量训练 2 次":"2 strength sessions","每次 30–40 分钟":"30–40 minutes each","中低强度有氧 3 次":"3 low-to-moderate cardio sessions","快走、骑行或游泳":"Brisk walking, cycling, or swimming","每餐一掌心蛋白质":"One palm of protein per meal","鱼、蛋、瘦肉或豆制品":"Fish, eggs, lean meat, or tofu","午晚餐蔬菜占一半":"Fill half your lunch and dinner with vegetables","优先深色蔬菜":"Choose dark leafy vegetables first","主食不过度削减":"Do not cut carbs too aggressively","每餐约一拳头":"About one fist-sized serving per meal","睡够 7 小时":"Get 7 hours of sleep","恢复也是减脂计划":"Recovery is part of the plan","饮食":"Nutrition","恢复":"Recovery","无补充说明":"No additional notes","按自己的节奏完成":"Complete it at your own pace",
    "提醒事项":"REMINDERS","添加待办":"Add task","要做什么":"Task","写下一件具体的事":"Write down one specific task","时间":"Time","清单":"List","生活":"Life","工作":"Work","家庭":"Family","个人":"Personal","优先级":"Priority","普通":"Normal","高优先级":"High priority","低优先级":"Low priority","地点、准备事项或补充说明":"Location, preparation, or notes","到时间提醒我":"Remind me when it is due","加入日程":"Add to planner","今天":"Today","昨天":"Yesterday","已逾期":"Overdue","未来 7 天":"Next 7 days","一周日历":"WEEK CALENDAR","接下来七天":"The next seven days","智能清单":"SMART LIST","我的提醒事项":"My reminders","全部":"All","计划内":"Scheduled","全天":"All day","到时提醒":"Reminder on","留白":"Open","切换完成状态":"Toggle completion","删除":"Delete",
    "想买先记下":"SAVE IT FOR LATER","添加待买物品":"Add shopping item","物品名称":"Item name","例如：洗衣液、燕麦奶":"For example: detergent or oat milk","数量":"Quantity","2 盒":"2 cartons","食品":"Food","日用品":"Household","家居":"Home","数码":"Electronics","药品":"Medicine","预计单价 ¥":"Estimated unit price ¥","有空买":"When convenient","急需":"Urgent","等等再买":"Wait before buying","品牌、规格或购买渠道":"Brand, size, or where to buy","加入待买清单":"Add to shopping list","预计预算":"Estimated budget","本月买到":"Bought this month","需要的时候再买":"Buy it when you need it","待买":"To buy","已买":"Bought","数量未填":"No quantity","未分类":"Uncategorized","待定":"TBD","预计":"Estimate","燕麦奶":"Oat milk","无糖款":"Unsweetened","洗衣液":"Laundry detergent","1 瓶":"1 bottle","补充装":"Refill pack",
    "我的精神收藏":"MY MEDIA SHELF","记下一部作品":"Add a title","名字":"Title","电影、剧、书或番的名字":"Film, show, book, or anime title","类型":"Type","电影":"Film","剧":"Series","书":"Book","番":"Anime","状态":"Status","想看":"Want to watch","在看":"In progress","看完":"Finished","弃了":"Dropped","我的评分":"My rating","暂不评分":"Not rated yet","记录日期":"Log date","一句话短评":"One-line review","这一部为什么值得记住":"Why is this one worth remembering?","可选封面":"Optional cover","自动压缩保存，也可以只写名字":"Compressed and saved automatically; a title alone is fine","加入我的书影音":"Add to media log","今年看完":"Finished this year","0 部":"0 titles","平均评分":"Average rating","最爱类型":"Favorite type","年度统计":"YEAR IN REVIEW","，我的精神足迹":", my media journey","适合截图分享":"Ready to screenshot and share","书影音收藏":"Media collection","封面墙":"Cover wall","列表":"List","全部状态":"All statuses","全部评分":"All ratings","5 星":"5 stars","4 星以上":"4+ stars","3 星以上":"3+ stars","未评分":"Not rated","封面":" cover","宇宙探索编辑部":"Journey to the West","漫长的季节":"The Long Season","献给阿尔吉侬的花束":"Flowers for Algernon","葬送的芙莉莲":"Frieren: Beyond Journey's End","机器人之梦":"Robot Dreams","荒诞又真诚，浪漫得很具体。":"Absurd yet sincere, with a wonderfully tangible sense of romance.","往前看，别回头。":"Keep moving forward. Do not look back.","聪明与幸福之间，并没有简单答案。":"There is no simple answer between intelligence and happiness.","时间把告别变成了理解。":"Time turns farewell into understanding.",
    "所有日常，都有出处":"EVERY DAY LEAVES A TRACE","按日期折叠的生活记录":"A life log grouped by date","财务":"Money","健康":"Health","日程":"Planner","记账":"Money","习惯":"Habits","条记录":"entries","生活记录":"Life entry","一笔收支":"Transaction","一项日程":"Task","身体记录":"Body log",
    "习惯设置":"HABIT SETTINGS","新增自己的习惯":"Create your own habit","习惯名称":"Habit name","例如：早睡、拉伸、背单词":"For example: sleep early, stretch, or learn words","打卡方式":"Tracking method","完成 / 未完成":"Done / not done","计数累加":"Counter","填写数值":"Numeric value","主题色":"Theme color","鼠尾草绿":"Sage green","暮色紫":"Twilight plum","陶土橙":"Terracotta","燕麦色":"Oat","每日目标":"Daily target","单位":"Unit","次 / 分钟 / 页":"times / minutes / pages","当前习惯":"Current habits","删除后历史打卡也会一起移除":"Deleting a habit also removes its check-in history","取消":"Cancel","添加习惯":"Add habit","关闭":"Close",
    "周计划":"WEEKLY PLAN","添加运动或饮食计划":"Add an exercise or nutrition plan","类别":"Category","其他":"Other","计划名称":"Plan name","例如：慢跑 2 次":"For example: jog twice","补充说明":"Additional notes","频次、时长或具体做法":"Frequency, duration, or details","现有周计划":"Current weekly plan","可随时删除不再需要的项目":"Remove plans you no longer need at any time","添加计划":"Add plan",
    "减脂档案":"FITNESS PROFILE","身高 cm":"Height cm","目标 kg":"Goal kg","年龄":"Age","生理性别":"Sex","女":"Female","男":"Male","日常活动":"Daily activity","久坐":"Sedentary","轻度活动":"Lightly active","中度活动":"Moderately active","高强度活动":"Highly active","保存目标":"Save goal",
    "工作台外观":"WORKBENCH APPEARANCE","把它变成你的日常集":"Make this workbench yours","页面名称":"Page name","头像文字":"Avatar text","副标题":"Tagline","森林绿":"Forest green","陶土棕":"Clay brown","深海蓝":"Deep sea blue","恢复默认":"Restore defaults","保存外观":"Save appearance",
    "午饭":"Lunch","公交":"Bus","买衣服":"Clothes","电影票":"Movie ticket","整理本周生活清单":"Organize this week's life list","先处理最重要的三件事":"Start with the three most important things","预约牙科检查":"Book a dental checkup","带上医保卡":"Bring insurance card","周末采购":"Weekend shopping","按待买清单购买":"Shop from the list","状态平稳":"Feeling steady",
    "今天的节奏很好，也记得留一点空白。":"You found a good rhythm today. Remember to leave a little breathing room.","已经在稳稳推进，继续保持自己的节奏。":"You are making steady progress. Keep your own pace.","今天先从一件小事开始，慢慢来就好。":"Start with one small thing today. Take it slowly.","已超出本月预算":"Over this month's budget","今天全部完成":"Everything completed today","第一条记录，会从这里开始":"Your first entry will appear here","生活已经积攒了一些痕迹，趁现在为它存一份备份。":"Your life has gathered a few traces. This is a good time to save a backup.","你不是在追赶完美，而是在让好习惯慢慢变得自然。":"You are not chasing perfection; you are letting good habits become natural.","这个分类还没有流水":"No transactions in this category yet","今天还没记账":"No transaction logged today","有空时补一笔，让月度趋势保持完整。":"Add one when you have time to keep your monthly trend complete.","已新增 20 笔账目":"20 transactions added","建议现在导出一次备份。":"We recommend exporting a backup now.","先看消费结构，再决定哪些支出可以放慢一点。":"Review the spending breakdown, then decide what can wait.",
    "目标已达成，进入稳定期":"Goal reached. You are now in the maintenance phase.","多记录几天后估算达成时间":"Log a few more days to estimate your goal date","今天还没称重":"No weight logged today","尽量在相似时间、相似状态下记录，关注 7 天平均线。":"Log under similar conditions and focus on the 7-day average.","不用追赶，选一项适合今天状态的完成。":"No need to catch up. Choose one plan that fits how you feel today.","今天已记录，本周计划也完成了":"Today's data is logged and this week's plan is complete","做得很好，记得给身体留恢复时间。":"Well done. Remember to leave time for recovery.","还没有周计划，点击右上角新增一项":"No weekly plan yet. Add one from the top right.","记录体重和体脂，关注趋势而不是单日数字":"Log weight and body fat, and focus on the trend rather than a single day.","这个智能清单里暂时没有事项":"No items in this smart list yet","待买清单已经清空":"Your shopping list is clear","这里还没有物品":"No items here yet","这个筛选条件下还没有作品":"No titles match these filters","这个范围还没有记录":"No entries in this range","建议现在导出备份":"Export a backup now","还没有习惯":"No habits yet","还没有周计划":"No weekly plan yet",
    "存不下了，先导出备份":"Storage is full. Export a backup first.","已经攒到 20 笔，记得导出备份":"You have reached 20 transactions. Remember to export a backup.","已立即保存到本机":"Saved to this device instantly","记录已删除":"Entry deleted","备份格式不正确":"Invalid backup format","备份中有损坏的记录，请换一份备份重试":"The backup contains corrupted entries. Try another backup.","备份已导出，请妥善保存":"Backup exported. Keep it somewhere safe.","Excel 已导出":"Excel file exported","备份导入成功":"Backup imported successfully","导入失败，请检查备份文件":"Import failed. Check the backup file.","封面读取失败":"Could not read the cover image","封面格式不支持":"Unsupported cover image format","封面图片请控制在 12MB 以内":"Keep the cover image under 12 MB","封面已压缩，可以保存了":"Cover compressed and ready to save","已加入书影音清单":"Added to your media log","新习惯已加入":"New habit added","新计划已加入":"New plan added","目标设置已更新":"Goal settings updated","完成一项，心里轻一点":"One task done, one less thing on your mind","习惯已删除":"Habit deleted","计划已删除":"Plan deleted","买到了，已移入完成":"Bought and moved to completed","已从书影音清单移除":"Removed from your media log","已恢复默认外观":"Default appearance restored","月度预算已更新":"Monthly budget updated","示例内容已清空":"Sample content cleared","另一个页面的数据已同步":"Data from another tab has been synced","工作台外观已更新":"Workbench appearance updated","请输入有效金额":"Enter a valid amount","请记录今天的体重":"Log today's weight"
  };
  const I18N = {zh:Object.fromEntries(Object.keys(EN_I18N).map(key=>[key,key])),en:EN_I18N};
  const t = (key, vars={}) => String(I18N[LANG][key] ?? key).replace(/\{(\w+)\}/g,(_,name)=>vars[name] ?? '');
  const dynamicTranslators = [
    [/^距备份提醒还有 (\d+) 条$/,m=>`${m[1]} entries until the next backup reminder`],
    [/^(\d+) 月 (\d+) 日 · 星期([日一二三四五六])$/,m=>new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',weekday:'long'}).format(new Date(new Date().getFullYear(),Number(m[1])-1,Number(m[2])))],
    [/^(\d+) 月 (\d+) 日$/,m=>new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'}).format(new Date(new Date().getFullYear(),Number(m[1])-1,Number(m[2])))],
    [/^还可安排 (.+)$/,m=>`${m[1]} available`],[/^已经完成 (\d+) 件$/,m=>`${m[1]} completed`],[/^(\d+) 件$/,m=>`${m[1]} tasks`],
    [/^比上月(多|少)花了 (.+)$/,m=>`${m[1]==='多'?'Spent':'Saved'} ${m[2]} ${m[1]==='多'?'more':'versus last month'}`],[/^([↑↓]) (\d+)% · 上月 (.+)$/,m=>`${m[1]} ${m[2]}% · Last month ${m[3]}`],
    [/^已使用 (-?\d+)%$/,m=>`${m[1]}% used`],[/^剩余 (.+)$/,m=>`${m[1]} left`],[/^本月支出已超预算 (.+)$/,m=>`Monthly spending is ${m[1]} over budget`],
    [/^目标 (.+) (.+) · 连续 (\d+) 天$/,m=>`Target ${m[1]} ${translateText(m[2])} · ${m[3]}-day streak`],[/^(\d+) 天$/,m=>`${m[1]} days`],[/^(\d+)：(.+)$/,m=>`${m[1]}: ${translateText(m[2])}`],
    [/^起点 (.+) kg$/,m=>`Start ${m[1]} kg`],[/^目标 (.+) kg$/,m=>`Goal ${m[1]} kg`],[/^按当前趋势，约还需 (\d+) 天$/,m=>`About ${m[1]} days at the current trend`],
    [/^按 Mifflin–St Jeor 公式估算，当前每日消耗约 (\d+) kcal。记录饮食后可判断热量缺口。$/,m=>`Estimated daily expenditure is about ${m[1]} kcal using the Mifflin–St Jeor formula. Log meals to assess your calorie deficit.`],
    [/^当前估算每日热量缺口 (-?\d+) kcal，不在健康建议的 500–750 kcal 范围内，请调整饮食或运动。$/,m=>`Your estimated daily calorie deficit is ${m[1]} kcal, outside the recommended 500–750 kcal range. Adjust food intake or exercise.`],
    [/^当前估算每日热量缺口 (-?\d+) kcal，在建议的 500–750 kcal 范围内。$/,m=>`Your estimated daily calorie deficit is ${m[1]} kcal, within the recommended 500–750 kcal range.`],
    [/^本周计划还有 (\d+) 项$/,m=>`${m[1]} items remain in this week's plan`],[/^(\d+) \/ (\d+) 已完成$/,m=>`${m[1]} / ${m[2]} completed`],[/^(\d+) 项$/,m=>`${m[1]} items`],[/^(\d+) 件待完成$/,m=>`${m[1]} to do`],
    [/^(\d+) 部$/,m=>`${m[1]} titles`],[/^(\d+) 星$/,m=>`${m[1]} stars`],[/^(\d+) 条记录$/,m=>`${m[1]} entries`],[/^“(.+)”$/,m=>`“${translateText(m[1])}”`],
    [/^将导入 (\d+) 条记录，并替换当前数据。是否继续？$/,m=>`Import ${m[1]} entries and replace the current data?`],[/^将清空 (\d+) 条示例记录和示例打卡，你自己的内容会保留。是否继续？$/,m=>`Clear ${m[1]} sample entries and sample check-ins? Your own content will be kept.`],
    [/^确定删除“(.+)”吗？删除后无法撤回。$/,m=>`Delete “${translateText(m[1])}”? This cannot be undone.`],[/^确定删除习惯“(.+)”吗？历史打卡也会一起删除。$/,m=>`Delete the habit “${translateText(m[1])}” and all of its history?`],[/^确定删除计划“(.+)”吗？$/,m=>`Delete the plan “${translateText(m[1])}”?`],[/^确定从清单中删除“(.+)”吗？$/,m=>`Remove “${translateText(m[1])}” from the list?`],
    [/^(.+)，完成得漂亮$/,m=>`${translateText(m[1])} completed — nicely done`]
  ];
  function translateText(value){
    if(LANG!=='en') return String(value ?? '');
    const source=String(value ?? ''),trimmed=source.trim();
    if(!trimmed)return source;
    let translated=EN_I18N[trimmed];
    if(!translated){for(const [pattern,format] of dynamicTranslators){const match=trimmed.match(pattern);if(match){translated=format(match);break;}}}
    if(!translated&&trimmed.includes(' · ')){const parts=trimmed.split(' · '),mapped=parts.map(part=>EN_I18N[part]||part);if(mapped.some((part,index)=>part!==parts[index]))translated=mapped.join(' · ');}
    if(!translated)return source;
    return source.replace(trimmed,translated);
  }
  function localizeSubtree(root){
    if(LANG!=='en'||!root)return;
    const translateAttributes=element=>{
      if(!(element instanceof Element)||element.closest('[data-user-content]'))return;
      ['placeholder','title','aria-label','alt','data-title'].forEach(name=>{if(element.hasAttribute(name))element.setAttribute(name,translateText(element.getAttribute(name)));});
      if(element.tagName==='META'&&element.getAttribute('name')==='description')element.setAttribute('content',translateText(element.getAttribute('content')));
    };
    if(root.nodeType===Node.TEXT_NODE){const parent=root.parentElement;if(parent&&!parent.closest('script,style,[data-user-content]')){const translated=translateText(root.nodeValue);if(translated!==root.nodeValue)root.nodeValue=translated;}return;}
    if(!(root instanceof Element)&&root!==document)return;
    if(root instanceof Element)translateAttributes(root);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
    let node;while((node=walker.nextNode())){
      if(node.nodeType===Node.ELEMENT_NODE)translateAttributes(node);
      else if(!node.parentElement?.closest('script,style,[data-user-content]')){
        const option=node.parentElement?.closest('option');if(option&&!option.hasAttribute('value'))option.setAttribute('value',option.value);
        const translated=translateText(node.nodeValue);if(translated!==node.nodeValue)node.nodeValue=translated;
      }
    }
  }
  function startI18n(){
    document.querySelectorAll('[data-lang]').forEach(button=>{button.classList.toggle('active',button.dataset.lang===LANG);button.setAttribute('aria-pressed',String(button.dataset.lang===LANG));button.addEventListener('click',()=>{if(button.dataset.lang===LANG)return;const url=new URL(location);url.searchParams.set('lang',button.dataset.lang);location.assign(url.href);});});
    localizeSubtree(document);
    if(LANG==='en')new MutationObserver(mutations=>mutations.forEach(mutation=>{if(mutation.type==='characterData')localizeSubtree(mutation.target);else mutation.addedNodes.forEach(localizeSubtree);})).observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  }
  const nativeConfirm=window.confirm.bind(window);window.confirm=message=>nativeConfirm(translateText(message));

  // 存储已迁移至资料库在线数据表（window.__SMART_PAGE__.database SDK）
  const EXPENSE_CATEGORIES = ['吃饭','交通','购物','娱乐','房租','看病','学习','其他'];
  const INCOME_CATEGORIES = ['工资','奖金','兼职','理财','其他'];
  const CATEGORY_COLORS = ['#b65f42','#627a67','#7d5b75','#a57c45','#5f7188','#c58d69','#879a75','#8e8478'];
  const TYPE_META = {
    money:{label:'财务',icon:'i-wallet',tone:'terracotta'},fitness:{label:'健康',icon:'i-fitness',tone:'sage'},
    planner:{label:'日程',icon:'i-calendar',tone:'plum'},home:{label:'待买',icon:'i-cart',tone:'sand'}
  };
  const HABIT_DEFS = [
    {key:'water',name:'喝水',nameEn:'Drink water',type:'counter',target:8,unit:'杯',unitEn:'cups',tone:'sage'},
    {key:'sleep',name:'睡觉',nameEn:'Sleep',type:'number',target:7,unit:'小时',unitEn:'hours',tone:'plum'},
    {key:'exercise',name:'运动',nameEn:'Exercise',type:'check',target:1,unit:'次',unitEn:'times',tone:'terracotta'},
    {key:'reading',name:'看书',nameEn:'Read',type:'check',target:1,unit:'次',unitEn:'times',tone:'sand'},
    {key:'meditation',name:'冥想',nameEn:'Meditate',type:'check',target:1,unit:'次',unitEn:'times',tone:'sage'}
  ];
  const resolveHabitName = def => (LANG==='en'&&def.nameEn)?def.nameEn:def.name;
  const resolveHabitUnit = def => (LANG==='en'&&def.unitEn)?def.unitEn:def.unit;
  const DEFAULT_PLAN = [
    {id:'move-1',group:'运动',title:'力量训练 2 次',titleEn:'Strength training ×2',note:'每次 30–40 分钟',noteEn:'30–40 min each',done:false},
    {id:'move-2',group:'运动',title:'中低强度有氧 3 次',titleEn:'Moderate cardio ×3',note:'快走、骑行或游泳',noteEn:'Walk / cycle / swim',done:false},
    {id:'meal-1',group:'饮食',title:'每餐一掌心蛋白质',titleEn:'Palm-size protein per meal',note:'鱼、蛋、瘦肉或豆制品',noteEn:'Fish, eggs, lean meat or tofu',done:false},
    {id:'meal-2',group:'饮食',title:'午晚餐蔬菜占一半',titleEn:'Veggies = half the plate',note:'优先深色蔬菜',noteEn:'Prefer dark greens',done:false},
    {id:'meal-3',group:'饮食',title:'主食不过度削减',titleEn:"Don't cut carbs too much",note:'每餐约一拳头',noteEn:'~one fist per meal',done:false},
    {id:'meal-4',group:'恢复',title:'睡够 7 小时',titleEn:'Sleep 7+ hours',note:'恢复也是减脂计划',noteEn:'Rest is part of fat loss',done:false}
  ];

  const isoDate = (date = new Date()) => {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0,10);
  };
  const shiftDate = (days, base = new Date()) => { const d = new Date(base); d.setDate(d.getDate()+days); return isoDate(d); };
  const uid = () => crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;

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
  async function persistRecord(rec){if(!db)return;const props=recordToProps(rec);if(isServerId(rec.id)){await db.updateRecord({databaseId:'faRQQAZO65nI5gQVX2XPEa',recordId:rec.id,properties:props});}else{const res=await db.addRecord({databaseId:'faRQQAZO65nI5gQVX2XPEa',properties:props});const rid=extractId(res);if(rid)rec.id=rid;}}
  async function persistDeleteRecord(rec){if(!db)return;if(isServerId(rec.id))await db.deleteRecord({databaseId:'faRQQAZO65nI5gQVX2XPEa',recordId:rec.id});}

  function habitToProps(h){return {名称:{text:h.name||''},类型:{select:HABIT_TYPE_TO_SELECT[h.type]||'完成/未完成'},目标:{number:Number(h.target||1)},单位:{text:h.unit||'次'},主题色:{select:h.tone||'sage'},键:{text:h.key||''},示例:{checkbox:!!h.sample},隐藏:{checkbox:!!h.hidden}};}
  function habitFromState(r){return {id:r._id,name:r['名称'],type:SELECT_TO_HABIT_TYPE[r['类型']]||'check',target:Number(r['目标']||1),unit:r['单位']||'次',tone:r['主题色']||'sage',key:r['键']||'',sample:!!r['示例'],hidden:!!r['隐藏'],entries:{}};}
  async function persistHabit(h){if(!db)return;const props=habitToProps(h);if(isServerId(h.id)){await db.updateRecord({databaseId:'TmgArrVXW3blP0Wp4zO4Nn',recordId:h.id,properties:props});}else{const res=await db.addRecord({databaseId:'TmgArrVXW3blP0Wp4zO4Nn',properties:props});const rid=extractId(res);if(rid)h.id=rid;}}
  async function persistDeleteHabit(h){if(!db)return;if(isServerId(h.id))await db.deleteRecord({databaseId:'TmgArrVXW3blP0Wp4zO4Nn',recordId:h.id});const logs=habitLogMap[h.id]||{};const ids=Object.keys(logs).map(function(k){return logs[k];});for(let i2=0;i2<ids.length;i2+=100){await deleteBatch('f8DOHlPQulccQ2Vthuimul',ids.slice(i2,i2+100));}delete habitLogMap[h.id];}
  async function persistHabitEntry(habitId,date,value){if(!db)return;const props={习惯ID:{text:habitId},日期:{date:date},数值:{number:Number(value||0)},示例:{checkbox:false}};const existing=habitLogMap[habitId]&&habitLogMap[habitId][date];if(existing){await db.updateRecord({databaseId:'f8DOHlPQulccQ2Vthuimul',recordId:existing,properties:props});}else{const res=await db.addRecord({databaseId:'f8DOHlPQulccQ2Vthuimul',properties:props});if(res&&res.id){(habitLogMap[habitId]=habitLogMap[habitId]||{})[date]=res.id;}}}

  function mediaToProps(m){return {名称:{text:m.name||''},类型:{select:m.type||'电影'},状态:{select:m.status||'想看'},星级:{number:Number(m.rating||0)},短评:{text:m.review||''},日期:{date:m.date},封面:{text:m.cover||''},示例:{checkbox:!!m.sample}};}
  function mediaFromState(r){return {id:r._id,name:r['名称'],type:r['类型']||'电影',status:r['状态']||'想看',rating:Number(r['星级']||0),review:r['短评']||'',date:r['日期'],cover:r['封面']||'',sample:!!r['示例']};}
  async function persistMedia(m){if(!db)return;const props=mediaToProps(m);if(isServerId(m.id)){await db.updateRecord({databaseId:'6V6gJ2VMfDNdD1RuAAnU5q',recordId:m.id,properties:props});}else{const res=await db.addRecord({databaseId:'6V6gJ2VMfDNdD1RuAAnU5q',properties:props});const rid=extractId(res);if(rid)m.id=rid;}}
  async function persistDeleteMedia(id){if(!db)return;if(isServerId(id))await db.deleteRecord({databaseId:'6V6gJ2VMfDNdD1RuAAnU5q',recordId:id});}

  function planToProps(p){return {组:{select:p.group||'其他'},名称:{text:p.title||''},说明:{text:p.note||''},完成:{checkbox:!!p.done},键:{text:p.key||''},示例:{checkbox:!!p.sample}};}
  function planFromState(r){return {id:r._id,group:r['组']||'其他',title:r['名称']||'',titleEn:'',note:r['说明']||'',noteEn:'',done:!!r['完成'],sample:!!r['示例']};}
  async function persistPlan(p){if(!db)return;const props=planToProps(p);if(isServerId(p.id)){await db.updateRecord({databaseId:'rcXuUbBGcct1N8ABvUV0OB',recordId:p.id,properties:props});}else{const res=await db.addRecord({databaseId:'rcXuUbBGcct1N8ABvUV0OB',properties:props});const rid=extractId(res);if(rid)p.id=rid;}}
  async function persistDeletePlan(id){if(!db)return;if(isServerId(id))await db.deleteRecord({databaseId:'rcXuUbBGcct1N8ABvUV0OB',recordId:id});}

  async function persistSettings(){if(!db)return;const s=state.settings||{};const payload={budget:Number(s.budget||0),recordsSinceExport:Number(s.recordsSinceExport||0),moneySinceExport:Number(s.moneySinceExport||0),lastExportAt:s.lastExportAt||null,archiveFilter:s.archiveFilter||'all',moneyFilter:s.moneyFilter||'all',plannerFilter:s.plannerFilter||'all',shoppingFilter:s.shoppingFilter||'pending',mediaView:s.mediaView||'wall',mediaStatusFilter:String(s.mediaStatusFilter||'0'),hiddenHabitKeys:s.hiddenHabitKeys||[],brand:s.brand||{},fitnessProfile:s.fitnessProfile||{},drafts:s.drafts||{}};const props={键:{text:'main'},值:{text:JSON.stringify(payload)}};if(settingsId){await db.updateRecord({databaseId:'41AQUHDSPeXYCWTpfpqbvW',recordId:settingsId,properties:props});}else{const res=await db.addRecord({databaseId:'41AQUHDSPeXYCWTpfpqbvW',properties:props});if(res&&res.id)settingsId=res.id;}}

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
    const tables=['faRQQAZO65nI5gQVX2XPEa','TmgArrVXW3blP0Wp4zO4Nn','f8DOHlPQulccQ2Vthuimul','6V6gJ2VMfDNdD1RuAAnU5q','rcXuUbBGcct1N8ABvUV0OB','41AQUHDSPeXYCWTpfpqbvW'];
    for(let t=0;t<tables.length;t++){const rows=await loadAll(tables[t]);const ids=rows.map(function(r){return r._id;});for(let i2=0;i2<ids.length;i2+=100){await deleteBatch(tables[t],ids.slice(i2,i2+100));}}
    settingsId=null;habitLogMap={};
    await seedSamples();
  }

  async function loadFromServer(){
    if(!db){dbReady=false;return;}
    try{
      showSync('loading');
      const recs=await loadAll('faRQQAZO65nI5gQVX2XPEa');
      const habits=await loadAll('TmgArrVXW3blP0Wp4zO4Nn');
      const logs=await loadAll('f8DOHlPQulccQ2Vthuimul');
      const media=await loadAll('6V6gJ2VMfDNdD1RuAAnU5q');
      const plans=await loadAll('rcXuUbBGcct1N8ABvUV0OB');
      const setRows=await loadAll('41AQUHDSPeXYCWTpfpqbvW');
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
  function registerSync(){if(!db||typeof db.onUpdated!=='function')return;if(syncRegistered)return;syncRegistered=true;db.onUpdated(function(payload){const ids=(payload&&payload.databaseIds)||[];if(ids.indexOf('faRQQAZO65nI5gQVX2XPEa')>=0||ids.indexOf('TmgArrVXW3blP0Wp4zO4Nn')>=0||ids.indexOf('f8DOHlPQulccQ2Vthuimul')>=0||ids.indexOf('6V6gJ2VMfDNdD1RuAAnU5q')>=0||ids.indexOf('rcXuUbBGcct1N8ABvUV0OB')>=0||ids.indexOf('41AQUHDSPeXYCWTpfpqbvW')>=0){if(syncTimer)clearTimeout(syncTimer);syncTimer=setTimeout(function(){loadFromServer();},600);}});}
  // 注：本页采用手动 SDK 读写 + 自建渲染，不依赖 data-sp-bindable 声明式绑定；页面与数据表的关联由 import_html.py --databases 在服务端登记。

  const money = value => `¥${Number(value||0).toLocaleString(LANG==='en'?'en-US':'zh-CN',{maximumFractionDigits:2})}`;
  const escapeHtml = value => String(value??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const userHtml = value => `<span data-user-content>${escapeHtml(value)}</span>`;
  const localizedHtml = value => escapeHtml(translateText(value));
  const icon = id => `<svg aria-hidden="true"><use href="#${id}"/></svg>`;
  const sum = (items, pick) => items.reduce((total,item)=>total+Number(pick(item)||0),0);
  const clamp = (value,min,max) => Math.max(min,Math.min(max,value));

  function sampleFitness() {
    const weights = [61.2,61,60.9,60.7,60.8,60.5,60.4,60.3,60.2,60.1,60.2,60.1,60,60];
    return weights.map((weight,index)=>({id:uid(),type:'fitness',date:shiftDate(index-13),createdAt:Date.now()-100000+index,sample:true,data:{weight,bodyFat:Number((29.2-index*.07).toFixed(1)),calories:1650+(index%3)*60,duration:index%2?35:20,note:index===13?'状态平稳':''}}));
  }

  function makeInitialState() {
    const today=isoDate();
    const habits=HABIT_DEFS.map((def,index)=>{
      const entries={};
      for(let day=29;day>=0;day--){
        const date=shiftDate(-day);
        if((day+index)%5!==0){
          entries[date]=def.type==='counter'?6+(day%3):def.type==='number'?6.5+(day%3)*.5:1;
        }
      }
      if(def.key==='water') entries[today]=5;
      if(def.key==='sleep') entries[today]=7.5;
      if(def.key==='exercise') entries[today]=1;
      delete entries[today];
      return {...def,id:`habit-${def.key}`,entries,sample:true};
    });
    return {
      version:2,
      records:[
        {id:uid(),type:'money',date:today,createdAt:Date.now()-1000,sample:true,data:{flow:'expense',amount:32,category:'吃饭',note:'午饭'}},
        {id:uid(),type:'money',date:today,createdAt:Date.now()-2000,sample:true,data:{flow:'expense',amount:6,category:'交通',note:'公交'}},
        {id:uid(),type:'money',date:shiftDate(-2),createdAt:Date.now()-3000,sample:true,data:{flow:'income',amount:12000,category:'工资',note:'工资'}},
        {id:uid(),type:'money',date:shiftDate(-3),createdAt:Date.now()-4000,sample:true,data:{flow:'expense',amount:158,category:'购物',note:'买衣服'}},
        {id:uid(),type:'money',date:shiftDate(-4),createdAt:Date.now()-5000,sample:true,data:{flow:'expense',amount:45,category:'娱乐',note:'电影票'}},
        ...sampleFitness(),
        {id:uid(),type:'planner',date:today,createdAt:Date.now()-6000,sample:true,data:{title:'整理本周生活清单',titleEn:'Review weekly checklist',time:'10:30',priority:'high',list:'生活',note:'先处理最重要的三件事',remind:true,done:false}},
        {id:uid(),type:'planner',date:shiftDate(1),createdAt:Date.now()-7000,sample:true,data:{title:'预约牙科检查',titleEn:'Book dental checkup',time:'15:00',priority:'normal',list:'个人',note:'带上医保卡',remind:true,done:false}},
        {id:uid(),type:'planner',date:shiftDate(3),createdAt:Date.now()-8000,sample:true,data:{title:'周末采购',titleEn:'Weekend groceries',time:'11:00',priority:'low',list:'家庭',note:'按待买清单购买',remind:false,done:false}},
        {id:uid(),type:'home',date:today,createdAt:Date.now()-9000,sample:true,data:{name:'燕麦奶',quantity:'2 盒',category:'食品',price:18,priority:'high',note:'无糖款',bought:false}},
        {id:uid(),type:'home',date:shiftDate(-2),createdAt:Date.now()-10000,sample:true,data:{name:'洗衣液',quantity:'1 瓶',category:'日用品',price:39,priority:'normal',note:'补充装',bought:true,boughtDate:shiftDate(-1)}}
      ],
      habits,
      mediaItems:[
        {id:uid(),name:'宇宙探索编辑部',type:'电影',status:'看完',rating:5,review:'荒诞又真诚，浪漫得很具体。',date:today,cover:'',sample:true},
        {id:uid(),name:'漫长的季节',type:'剧',status:'看完',rating:5,review:'往前看，别回头。',date:shiftDate(-18),cover:'',sample:true},
        {id:uid(),name:'献给阿尔吉侬的花束',type:'书',status:'看完',rating:5,review:'聪明与幸福之间，并没有简单答案。',date:shiftDate(-35),cover:'',sample:true},
        {id:uid(),name:'葬送的芙莉莲',type:'番',status:'在看',rating:4,review:'时间把告别变成了理解。',date:shiftDate(-7),cover:'',sample:true},
        {id:uid(),name:'机器人之梦',type:'电影',status:'想看',rating:0,review:'',date:shiftDate(-2),cover:'',sample:true}
      ],
      drafts:{},
      settings:{budget:5000,recordsSinceExport:0,moneySinceExport:0,lastExportAt:null,archiveFilter:'all',moneyFilter:'all',plannerFilter:'all',shoppingFilter:'pending',mediaView:'wall',mediaStatusFilter:'all',mediaRatingFilter:0,hiddenHabitKeys:[],brand:{name:'日常集',avatar:'日',tagline:'生活有迹可循',theme:'plum'},fitnessProfile:{height:165,target:55,startWeight:60,age:30,sex:'female',activity:1.375},weeklyPlan:DEFAULT_PLAN.map(x=>({...x}))}
    };
  }

  function normalizeHabit(habit,index) {
    const def=HABIT_DEFS.find(item=>item.key===habit.key) || HABIT_DEFS[index] || {key:`custom-${index}`,name:habit.name||'习惯',type:'check',target:1,unit:'次',tone:habit.tone||'sage'};
    const entries={...(habit.entries||{})};
    (habit.completedDates||[]).forEach(date=>{entries[date]=1;});
    return {...def,...habit,id:habit.id||`habit-${def.key}`,entries};
  }

  function normalizeState(candidate) {
    if(!candidate||!Array.isArray(candidate.records)) throw new Error('备份格式不正确');
    const validTypes=new Set(Object.keys(TYPE_META));
    const validRecords=candidate.records.every(record=>record&&validTypes.has(record.type)&&/^\d{4}-\d{2}-\d{2}$/.test(record.date)&&record.data&&typeof record.data==='object');
    if(!validRecords) throw new Error('备份中有损坏的记录，请换一份备份重试');
    const defaults=makeInitialState();
    const existing=(Array.isArray(candidate.habits)?candidate.habits:[]).map(normalizeHabit);
    const hiddenHabitKeys=new Set(Array.isArray(candidate.settings?.hiddenHabitKeys)?candidate.settings.hiddenHabitKeys:[]);
    const defaultHabits=HABIT_DEFS.filter(def=>!hiddenHabitKeys.has(def.key)).map(def=>{
      const match=existing.find(h=>h.key===def.key || h.name===def.name || (def.key==='reading'&&h.name?.includes('阅读')) || (def.key==='water'&&h.name?.includes('水')));
      return match?{...def,...match,entries:match.entries||{}}:{...def,id:`habit-${def.key}`,entries:{},sample:false};
    });
    const defaultIds=new Set(defaultHabits.map(h=>h.id)),defaultKeys=new Set(HABIT_DEFS.map(h=>h.key));
    const customHabits=existing.filter(h=>!defaultIds.has(h.id)&&!defaultKeys.has(h.key)).map((h,index)=>({...h,key:h.key||`custom-${index}-${uid()}`,type:['check','counter','number'].includes(h.type)?h.type:'check',target:Number(h.target||1),unit:h.unit||'次',entries:h.entries||{},sample:Boolean(h.sample)}));
    const habits=[...defaultHabits,...customHabits];
    const shouldRefreshSamples=Number(candidate.version||1)<2&&candidate.records.some(record=>record.sample);
    const sourceRecords=shouldRefreshSamples
      ? [...candidate.records.filter(record=>!record.sample),...defaults.records.filter(record=>record.sample)]
      : candidate.records;
    const records=sourceRecords.map(record=>{
      const data={...(record.data||{})};
      if(record.type==='money'){
        const map={餐饮:'吃饭',居住:'房租',健康:'看病'};
        data.category=map[data.category]||data.category||'其他';
      }
      if(record.type==='home'){
        data.category=data.category||data.location||'其他'; data.price=Number(data.price||0); data.bought=Boolean(data.bought);
      }
      if(record.type==='planner'){data.list=data.list||'生活';data.note=data.note||'';data.remind=Boolean(data.remind);}
      return {...record,id:record.id||uid(),data};
    });
    const mediaItems=(Array.isArray(candidate.mediaItems)?candidate.mediaItems:defaults.mediaItems).filter(item=>item&&item.name).map(item=>({id:item.id||uid(),name:String(item.name),type:['电影','剧','书','番'].includes(item.type)?item.type:'电影',status:['想看','在看','看完','弃了'].includes(item.status)?item.status:'想看',rating:clamp(Number(item.rating||0),0,5),review:String(item.review||''),date:/^\d{4}-\d{2}-\d{2}$/.test(item.date||'')?item.date:isoDate(),cover:typeof item.cover==='string'?item.cover:'',sample:Boolean(item.sample)}));
    return {
      version:2,records,habits,mediaItems,
      drafts:candidate.drafts&&typeof candidate.drafts==='object'?candidate.drafts:{},
      settings:{...defaults.settings,...(candidate.settings||{}),brand:{...defaults.settings.brand,...(candidate.settings?.brand||{})},fitnessProfile:{...defaults.settings.fitnessProfile,...(candidate.settings?.fitnessProfile||{})},weeklyPlan:Array.isArray(candidate.settings?.weeklyPlan)?candidate.settings.weeklyPlan:DEFAULT_PLAN.map(x=>({...x}))}
    };
  }

  let dataCorrupted=false;
  function loadState(){ return makeInitialState(); }

  let state=makeInitialState();
  let dbReady=false;
  let toastTimer;
  let pendingMediaCover='';
  function saveState(showSaved=false){
    document.getElementById('storageAlert').hidden=true;
    document.querySelector('.save-state')?.classList.remove('error');
    const txt=document.getElementById('saveText');
    if(txt)txt.textContent= dbReady ? '已同步云端' : '已保存（本地）';
    if(showSaved) pulseSaved();
    return true;
  }
  function pulseSaved(){const el=document.querySelector('.save-state');if(!el)return;el.animate?.([{opacity:.5},{opacity:1}],{duration:350});}
  function toast(message){const el=document.getElementById('toast');el.textContent=translateText(message);el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2400);}
  function celebrate(){const box=document.getElementById('confetti');box.innerHTML=Array.from({length:16},(_,i)=>`<i style="--x:${45+Math.random()*10}%;--dx:${(Math.random()-.5)*240}px;--dy:${-70-Math.random()*170}px;--c:${['#b65f42','#627a67','#a57c45','#7d5b75'][i%4]}"></i>`).join('');setTimeout(()=>box.innerHTML='',900);}

  function sortedRecords(type,ascending=false){return state.records.filter(r=>!type||r.type===type).sort((a,b)=>(ascending?1:-1)*(a.date.localeCompare(b.date)||(a.createdAt||0)-(b.createdAt||0)));}
  async function addRecord(type,date,data){
    if(!db)return true;
    const rec={id:uid(),type,date:date||isoDate(),createdAt:Date.now(),sample:false,data};
    state.records.push(rec);
    state.settings.recordsSinceExport=Number(state.settings.recordsSinceExport||0)+1;
    if(type==='money') state.settings.moneySinceExport=Number(state.settings.moneySinceExport||0)+1;
    try{ await persistRecord(rec); }catch(e){ showSyncError(); return false; }
    const saved=saveState();renderAll();
    if(!saved)return false;
    toast('已保存到线上');
    return true;
  }
  async function deleteRecord(id){const target=state.records.find(r=>r.id===id);if(!target||!confirm(LANG==='en'?`Delete \"${titleFor(target)}\"? This cannot be undone.`:`确定删除\"${titleFor(target)}\"吗？删除后无法撤回。`))return;state.records=state.records.filter(r=>r.id!==id);try{ await persistDeleteRecord(target); }catch(e){ showSyncError(); return; }const saved=saveState();renderAll();if(saved)toast('记录已删除');}
  function switchView(view){const target=document.getElementById(`view-${view}`);if(!target)return;document.querySelectorAll('.view').forEach(el=>el.classList.toggle('active',el===target));document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav===view));document.getElementById('viewTitle').textContent=target.dataset.title||'日常集';if(location.hash!==`#${view}`)history.replaceState(null,'',`#${view}`);scrollTo({top:0,behavior:'smooth'});}
  function formatDateHeading(value){if(value===isoDate())return t('今天');if(value===shiftDate(-1))return t('昨天');const date=new Date(`${value}T00:00:00`);return LANG==='en'?new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric'}).format(date):`${date.getMonth()+1} 月 ${date.getDate()} 日`;}
  function titleFor(record){const d=record.data||{},local=value=>record.sample?translateText(value):value;if(record.type==='money')return d.note?local(d.note):t(d.category||'一笔收支');if(record.type==='planner')return d.title?local(d.title):t('一项日程');if(record.type==='fitness')return d.note?local(d.note):t('身体记录');if(record.type==='home')return d.name?local(d.name):t('待买物品');return t('生活记录');}
  function detailFor(record){const d=record.data||{};if(record.type==='money')return`${t(d.category||'其他')} · ${t(d.flow==='income'?'收入':'支出')}`;if(record.type==='planner')return`${t(d.list||'生活')} · ${d.time||t('全天')} · ${t(d.done?'已完成':'待完成')}`;if(record.type==='fitness')return`${d.bodyFat?`${LANG==='en'?'Body fat':'体脂'} ${d.bodyFat}% · `:''}${d.duration||0} ${LANG==='en'?'min exercise':'分钟运动'}`;if(record.type==='home')return`${record.sample?translateText(d.quantity||'数量未填'):(d.quantity||t('数量未填'))} · ${t(d.category||'未分类')} · ${t(d.bought?'已买':'待买')}`;return'';}
  function valueFor(record){const d=record.data||{};if(record.type==='money')return`${d.flow==='income'?'+':'-'}${money(d.amount)}`;if(record.type==='fitness'&&d.weight)return`${d.weight} kg`;if(record.type==='planner')return d.time||'';if(record.type==='home')return d.price?money(d.price):'';return'';}
  function recordDetailHtml(record){if(record.type!=='home')return escapeHtml(detailFor(record));const d=record.data||{},quantity=record.sample?localizedHtml(d.quantity||'数量未填'):userHtml(d.quantity||t('数量未填'));return`${quantity} · ${localizedHtml(d.category||'未分类')} · ${t(d.bought?'已买':'待买')}`;}
  function recordTitleHtml(record){if(record.sample)return localizedHtml(titleFor(record));const raw=titleFor(record);const translated=translateText(raw);return translated!==raw?translated:userHtml(raw);}
  function empty(message){return`<div class="empty-state">${localizedHtml(message)}</div>`;}
  function taskRow(record,deletable=false){const d=record.data;const overdue=!d.done&&record.date<isoDate(),title=record.sample?(LANG==='en'&&d.titleEn?d.titleEn:localizedHtml(d.title)):userHtml(d.title),note=record.sample?localizedHtml(d.note||''):userHtml(d.note||'');return`<div class="task-row ${d.done?'done':''} ${overdue?'overdue':''}"><button class="check-btn ${d.done?'checked':''}" data-action="toggle-task" data-id="${record.id}" aria-label="${t('切换完成状态')}">${d.done?icon('i-check'):''}</button><span class="task-title">${title} <i class="list-tag">${localizedHtml(d.list||'生活')}</i><small>${note}${d.remind?` · ${t('到时提醒')}`:''}</small></span><span class="task-time">${overdue?t('已逾期'):escapeHtml(d.time||t('全天'))}</span><span class="priority-flag ${d.priority==='high'?'high':''}"></span>${deletable?`<button class="delete-btn" data-action="delete" data-id="${record.id}" aria-label="${t('删除')}">${icon('i-trash')}</button>`:''}</div>`;}
  function recordRow(record){const meta=TYPE_META[record.type]||TYPE_META.home;const flowClass=record.type==='money'?record.data.flow:'';return`<div class="record-row"><span class="record-icon ${meta.tone}">${icon(meta.icon)}</span><span class="record-main"><strong>${recordTitleHtml(record)}</strong><small>${escapeHtml(formatDateHeading(record.date))} · ${recordDetailHtml(record)}</small></span><span class="record-amount ${flowClass}">${escapeHtml(valueFor(record))}</span><button class="delete-btn" data-action="delete" data-id="${record.id}" aria-label="${t('删除')}">${icon('i-trash')}</button></div>`;}

  function habitNameHtml(habit){const def=HABIT_DEFS.find(d=>d.key===habit.key);if(def)return escapeHtml(resolveHabitName(def));return habit.sample?localizedHtml(habit.name):userHtml(habit.name);}
  function habitDone(habit,date=isoDate()){return Number(habit.entries?.[date]||0)>=Number(habit.target||1);}
  function habitStreak(habit){let streak=0;const cursor=new Date();while(habitDone(habit,isoDate(cursor))){streak++;cursor.setDate(cursor.getDate()-1);}return streak;}
  function habitBestStreak(habit){let best=0,current=0;Object.keys(habit.entries||{}).sort().forEach((date,index,dates)=>{if(!habitDone(habit,date)){current=0;return;}const previous=dates[index-1];current=previous&&Math.round((new Date(date)-new Date(previous))/86400000)===1?current+1:1;best=Math.max(best,current);});return best;}

  function renderDashboard(){
    const today=isoDate(),month=today.slice(0,7);
    const monthExpense=sum(state.records.filter(r=>r.type==='money'&&r.date.startsWith(month)&&r.data.flow==='expense'),r=>r.data.amount);
    const todayTasks=sortedRecords('planner').filter(r=>r.date===today),doneTasks=todayTasks.filter(r=>r.data.done).length;
    const completed=state.habits.filter(h=>habitDone(h)).length;
    const fitnessToday=state.records.some(r=>r.type==='fitness'&&r.date===today);
    const habitRatio=state.habits.length?completed/state.habits.length:0;
    const taskRatio=todayTasks.length?doneTasks/todayTasks.length:0;
    const score=Math.min(100,Math.max(60,Math.round(60+habitRatio*20+taskRatio*12+(fitnessToday?8:0))));
    document.getElementById('lifeScore').textContent=score;
    document.getElementById('heroSummary').textContent=t(score>=85?'今天的节奏很好，也记得留一点空白。':score>=70?'已经在稳稳推进，继续保持自己的节奏。':'今天先从一件小事开始，慢慢来就好。');
    document.getElementById('monthExpense').textContent=money(monthExpense);
    document.getElementById('budgetHint').textContent=monthExpense>state.settings.budget?'已超出本月预算':`还可安排 ${money(Math.max(0,state.settings.budget-monthExpense))}`;
    document.getElementById('habitProgress').textContent=`${completed} / ${state.habits.length}`;
    document.getElementById('habitHint').textContent=completed===state.habits.length?'今天全部完成':'从一件小事开始';
    document.getElementById('taskProgress').textContent=`${todayTasks.filter(r=>!r.data.done).length} 件`;
    document.getElementById('taskHint').textContent=doneTasks?`已经完成 ${doneTasks} 件`:'节奏刚刚好';
    document.getElementById('dashboardTasks').innerHTML=todayTasks.length?todayTasks.slice(0,4).map(r=>taskRow(r)).join(''):empty('今天还没有待办，给自己留点空间');
    document.getElementById('dashboardHabits').innerHTML=state.habits.slice(0,5).map(h=>`<div class="habit-pill"><span class="habit-dot ${h.tone}"></span><strong>${habitNameHtml(h)}</strong><small>${t(habitDone(h)?'已完成':'待打卡')}</small><button class="check-btn ${habitDone(h)?'checked':''}" data-action="habit-quick" data-id="${h.id}">${habitDone(h)?icon('i-check'):''}</button></div>`).join('');
    const recent=sortedRecords().slice(0,5);document.getElementById('recentRecords').innerHTML=recent.length?recent.map(r=>{const meta=TYPE_META[r.type]||TYPE_META.home;return`<div class="timeline-item"><span class="record-icon ${meta.tone}">${icon(meta.icon)}</span><span><strong>${recordTitleHtml(r)}</strong><small>${escapeHtml(formatDateHeading(r.date))} · ${t(meta.label)}</small></span><span class="record-value">${escapeHtml(valueFor(r))}</span></div>`;}).join(''):empty('第一条记录，会从这里开始');
    document.getElementById('insightText').textContent=state.settings.recordsSinceExport>=15?'生活已经积攒了一些痕迹，趁现在为它存一份备份。':completed?'你不是在追赶完美，而是在让好习惯慢慢变得自然。':'规律不是把每天塞满，而是知道什么值得留下。';
  }

  function previousMonthKey(){const d=new Date();d.setDate(1);d.setMonth(d.getMonth()-1);return isoDate(d).slice(0,7);}
  function renderMoneyPie(expenses){
    const byCategory={};expenses.forEach(r=>byCategory[r.data.category]=(byCategory[r.data.category]||0)+Number(r.data.amount||0));
    const entries=Object.entries(byCategory).sort((a,b)=>b[1]-a[1]),total=sum(entries,e=>e[1]);
    const svg=document.getElementById('moneyPie'),legend=document.getElementById('moneyLegend');
    if(!total){svg.innerHTML='<circle cx="110" cy="110" r="72" fill="#eee7df"/><text x="110" y="115" text-anchor="middle" fill="#8f8579" font-size="12">暂无支出</text>';legend.innerHTML='';return;}
    const circumference=2*Math.PI*72;let offset=0;
    svg.innerHTML=`<circle cx="110" cy="110" r="72" fill="none" stroke="#eee7df" stroke-width="34"/>`+entries.map(([category,value],index)=>{const length=value/total*circumference;const item=`<circle cx="110" cy="110" r="72" fill="none" stroke="${CATEGORY_COLORS[index%CATEGORY_COLORS.length]}" stroke-width="34" stroke-dasharray="${length} ${circumference-length}" stroke-dashoffset="${-offset}" transform="rotate(-90 110 110)"/>`;offset+=length;return item;}).join('')+`<circle cx="110" cy="110" r="40" fill="white" fill-opacity=".85"/><text x="110" y="102" text-anchor="middle" fill="#9a9288" font-size="10" font-weight="400">${t('本月支出')}</text><text x="110" y="124" text-anchor="middle" fill="#3d3830" font-size="20" font-weight="500" letter-spacing="-0.5">${escapeHtml(money(total))}</text>`;
    legend.innerHTML=entries.map(([category,value],index)=>`<div class="legend-item"><i style="background:${CATEGORY_COLORS[index%CATEGORY_COLORS.length]}"></i><span>${escapeHtml(category)}</span><b>${Math.round(value/total*100)}%</b></div>`).join('');
  }
  function renderMoney(){
    const month=isoDate().slice(0,7),prev=previousMonthKey(),records=sortedRecords('money');
    const monthly=records.filter(r=>r.date.startsWith(month)),expenses=monthly.filter(r=>r.data.flow==='expense');
    const expense=sum(expenses,r=>r.data.amount),income=sum(monthly.filter(r=>r.data.flow==='income'),r=>r.data.amount),remain=income-expense;
    const prevExpense=sum(records.filter(r=>r.date.startsWith(prev)&&r.data.flow==='expense'),r=>r.data.amount);
    document.getElementById('moneyIncome').textContent=money(income);document.getElementById('moneyExpense').textContent=money(expense);document.getElementById('moneyBalance').textContent=money(remain);
    if(prevExpense){const diff=expense-prevExpense,pct=Math.abs(diff/prevExpense*100).toFixed(0);document.getElementById('monthCompare').textContent=`比上月${diff>=0?'多':'少'}花了 ${money(Math.abs(diff))}`;document.getElementById('monthCompareDetail').textContent=`${diff>=0?'↑':'↓'} ${pct}% · 上月 ${money(prevExpense)}`;}else{document.getElementById('monthCompare').textContent='暂无对比';document.getElementById('monthCompareDetail').textContent='有了上月数据后，这里会显示变化';}
    const used=state.settings.budget?Math.round(expense/state.settings.budget*100):0;document.getElementById('budgetInput').value=state.settings.budget;document.getElementById('budgetBar').style.width=`${Math.min(100,used)}%`;document.getElementById('budgetUsedText').textContent=`已使用 ${used}%`;document.getElementById('budgetRemainText').textContent=`剩余 ${money(state.settings.budget-expense)}`;
    const alert=document.getElementById('moneyAlert'),todayCount=records.filter(r=>r.date===isoDate()).length;
    if(expense>state.settings.budget){alert.className='module-alert';alert.innerHTML=`<div><strong>本月支出已超预算 ${money(expense-state.settings.budget)}</strong><span>先看消费结构，再决定哪些支出可以放慢一点。</span></div>`;}else if(!todayCount){alert.className='module-alert good';alert.innerHTML='<div><strong>今天还没记账</strong><span>有空时补一笔，让月度趋势保持完整。</span></div>';}else if(state.settings.moneySinceExport>=20){alert.className='module-alert';alert.innerHTML='<div><strong>已新增 20 笔账目</strong><span>建议现在导出一次备份。</span></div>';}else alert.innerHTML='';
    const categories=[...new Set([...EXPENSE_CATEGORIES,...INCOME_CATEGORIES])];
    document.getElementById('moneyFilter').innerHTML='<option value="all">全部分类</option>'+categories.map(c=>`<option ${state.settings.moneyFilter===c?'selected':''}>${c}</option>`).join('');
    const filtered=records.filter(r=>state.settings.moneyFilter==='all'||r.data.category===state.settings.moneyFilter);document.getElementById('moneyList').innerHTML=filtered.length?filtered.slice(0,60).map(recordRow).join(''):empty('这个分类还没有流水');
    renderMoneyPie(expenses);
  }

  function renderHabits(){
    const today=isoDate(),done=state.habits.filter(h=>habitDone(h)).length,maxStreak=Math.max(0,...state.habits.map(habitBestStreak));
    const dates=Array.from({length:30},(_,i)=>shiftDate(i-29));let completedCells=0;
    state.habits.forEach(h=>dates.forEach(d=>{if(habitDone(h,d))completedCells++;}));
    document.getElementById('habitsDone').textContent=`${done} / ${state.habits.length}`;document.getElementById('habitsStreak').textContent=`${maxStreak} 天`;document.getElementById('habitRate').textContent=state.habits.length?`${Math.round(completedCells/(state.habits.length*30)*100)}%`:'0%';
    document.getElementById('dailyHabitList').innerHTML=state.habits.map(h=>{const value=Number(h.entries?.[today]||0),isDone=habitDone(h),pulse=!isDone&&new Date().getHours()>=20,isBuiltIn=HABIT_DEFS.some(def=>def.key===h.key)||h.sample,hdef=HABIT_DEFS.find(d=>d.key===h.key),unit=h.type==='check'?localizedHtml('次'):hdef?escapeHtml(resolveHabitUnit(hdef)):isBuiltIn?localizedHtml(h.unit):userHtml(h.unit);let control='';if(h.type==='counter')control=`<div class="counter-control"><button data-action="habit-minus" data-id="${h.id}">${icon('i-minus')}</button><strong>${value}</strong><button data-action="habit-plus" data-id="${h.id}">${icon('i-plus')}</button></div>`;else if(h.type==='number')control=`<div class="sleep-control"><input data-action="habit-number" data-id="${h.id}" type="number" min="0" max="9999" step="0.1" value="${value||''}" placeholder="0"><span>${unit}</span></div>`;else control=`<button class="habit-check ${isDone?'checked':''}" data-action="habit-toggle" data-id="${h.id}">${isDone?icon('i-check'):''}</button>`;return`<div class="daily-habit ${isDone?'done':''} ${pulse?'pulse':''}"><button class="habit-card-delete" data-action="delete-habit-custom" data-id="${h.id}" aria-label="${t('删除习惯')}">${icon('i-trash')}</button><div><h3>${habitNameHtml(h)}</h3><p>${LANG==='en'?`Target ${h.target} ${unit} · ${habitStreak(h)}-day streak`:`目标 ${h.target} ${unit} · 连续 ${habitStreak(h)} 天`}</p></div><div class="habit-action"><span class="habit-state">${t(isDone?'已完成':'待完成')}</span>${control}</div></div>`;}).join('');
    const header=`<div class="heatmap-header"><span></span>${dates.map((d,i)=>`<span>${i%5===0?new Date(`${d}T00:00:00`).getDate():''}</span>`).join('')}</div>`;
    document.getElementById('habitHeatmap').innerHTML=header+state.habits.map(h=>`<div class="heatmap-row"><span class="heatmap-name">${habitNameHtml(h)}<i class="streak-badge">${LANG==='en'?`${habitStreak(h)} days`:`${habitStreak(h)} 天`}</i></span>${dates.map(date=>{const value=Number(h.entries?.[date]||0);return`<span class="heat-cell ${habitDone(h,date)?'done':value?'partial':''}" title="${date}${LANG==='en'?': ':'：'}${value||t('未完成')}"></span>`;}).join('')}</div>`).join('');
  }

  function fitnessStats(){
    const records=sortedRecords('fitness',true).filter(r=>r.data.weight),profile=state.settings.fitnessProfile;
    const current=records.at(-1)?.data.weight||profile.startWeight||60,start=profile.startWeight||records[0]?.data.weight||current,target=profile.target||55,height=profile.height||165;
    const bmi=current/((height/100)**2);let dailyRate=0;
    if(records.length>=2){const first=records[0],last=records.at(-1),days=Math.max(1,(new Date(last.date)-new Date(first.date))/86400000);dailyRate=(first.data.weight-last.data.weight)/days;}
    const bmr=10*current+6.25*height-5*(profile.age||30)+(profile.sex==='male'?5:-161),tdee=bmr*Number(profile.activity||1.375);
    const calorieRecords=records.filter(r=>Number(r.data.calories)>0),avgIntake=calorieRecords.length?sum(calorieRecords,r=>r.data.calories)/calorieRecords.length:0,deficit=avgIntake?tdee-avgIntake:0;
    if(dailyRate<=0&&deficit>0)dailyRate=deficit/7700;
    const remaining=Math.max(0,current-target),days=remaining&&dailyRate>0?Math.ceil(remaining/dailyRate):null;
    return{records,profile,current,start,target,bmi,bmr,tdee,avgIntake,deficit,remaining,days};
  }
  function drawWeightChart(records){
    const svg=document.getElementById('weightChart'),points=records.slice(-30);
    if(points.length<2){svg.innerHTML='<text x="380" y="140" text-anchor="middle" fill="#8f8579" font-size="14" font-family="Inter, PingFang SC, sans-serif">再记录一天，就能看到趋势</text>';return;}
    const values=points.map(r=>Number(r.data.weight)),averages=values.map((_,i)=>{const slice=values.slice(Math.max(0,i-6),i+1);return sum(slice,x=>x)/slice.length;});
    const rawMin=Math.min(...values,...averages),rawMax=Math.max(...values,...averages),step=Math.max(.2,Math.ceil((rawMax-rawMin)/4*10)/10),axisMin=Math.floor((rawMin-step)*10)/10,axisMax=Math.ceil((rawMax+step)*10)/10;
    const w=760,h=280,pad={l:62,r:24,t:20,b:42},x=i=>pad.l+i*(w-pad.l-pad.r)/(points.length-1),y=v=>pad.t+(axisMax-v)*(h-pad.t-pad.b)/(axisMax-axisMin),path=arr=>arr.map((v,i)=>`${i?'L':'M'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
    const ticks=4,grid=Array.from({length:ticks+1},(_,i)=>{const gy=pad.t+i*(h-pad.t-pad.b)/ticks,val=axisMax-i*(axisMax-axisMin)/ticks;return`<line x1="${pad.l}" x2="${w-pad.r}" y1="${gy}" y2="${gy}" stroke="#e7dfd5" stroke-width="1"/><text x="${pad.l-12}" y="${gy+4}" text-anchor="end" fill="#81776d" font-size="11" font-weight="500" font-family="Inter, PingFang SC, sans-serif">${val.toFixed(1)}</text>`;}).join('');
    const labelEvery=Math.max(1,Math.ceil(points.length/5)),labels=points.map((r,i)=>(i%labelEvery===0||i===points.length-1)?`<text x="${x(i)}" y="${h-12}" text-anchor="middle" fill="#81776d" font-size="10" font-weight="500" font-family="Inter, PingFang SC, sans-serif">${r.date.slice(5).replace('-','/')}</text>`:'').join('');
    svg.innerHTML=`${grid}<path d="${path(values)}" fill="none" stroke="var(--plum)" stroke-width="3" vector-effect="non-scaling-stroke"/><path d="${path(averages)}" fill="none" stroke="#b65f42" stroke-width="2.5" stroke-dasharray="7 5" vector-effect="non-scaling-stroke"/>${values.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="#fff" stroke="var(--plum)" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join('')}${labels}`;
  }
  function renderFitness(){
    const s=fitnessStats(),latest=s.records.at(-1),today=s.records.some(r=>r.date===isoDate());
    document.getElementById('latestWeight').textContent=`${Number(s.current).toFixed(1)} kg`;document.getElementById('weightRemain').textContent=LANG==='en'?`${s.remaining.toFixed(1)} kg`:`${(s.remaining*2).toFixed(1)} 斤`;document.getElementById('currentBmi').textContent=s.bmi.toFixed(1);
    const progress=s.start===s.target?100:clamp((s.start-s.current)/(s.start-s.target)*100,0,100);document.getElementById('fitnessPercent').textContent=`${Math.round(progress)}%`;document.getElementById('fitnessProgressBar').style.width=`${progress}%`;document.getElementById('fitnessStartText').textContent=`起点 ${s.start} kg`;document.getElementById('fitnessTargetText').textContent=`目标 ${s.target} kg`;document.getElementById('fitnessEstimate').textContent=s.remaining<=0?'目标已达成，进入稳定期':s.days?`按当前趋势，约还需 ${s.days} 天`:'多记录几天后估算达成时间';
    const advice=document.getElementById('calorieAdvice');if(!s.avgIntake){advice.className='health-note';advice.textContent=`按 Mifflin–St Jeor 公式估算，当前每日消耗约 ${Math.round(s.tdee)} kcal。记录饮食后可判断热量缺口。`;}else if(s.deficit<500||s.deficit>750){advice.className='health-note warning';advice.textContent=`当前估算每日热量缺口 ${Math.round(s.deficit)} kcal，不在健康建议的 500–750 kcal 范围内，请调整饮食或运动。`;}else{advice.className='health-note';advice.textContent=`当前估算每日热量缺口 ${Math.round(s.deficit)} kcal，在建议的 500–750 kcal 范围内。`}
    const alert=document.getElementById('fitnessAlert'),planLeft=state.settings.weeklyPlan.filter(x=>!x.done).length;alert.className=`module-alert ${today&&planLeft===0?'good':''}`;alert.innerHTML=!today?'<div><strong>今天还没称重</strong><span>尽量在相似时间、相似状态下记录，关注 7 天平均线。</span></div>':planLeft?`<div><strong>本周计划还有 ${planLeft} 项</strong><span>不用追赶，选一项适合今天状态的完成。</span></div>`:'<div><strong>今天已记录，本周计划也完成了</strong><span>做得很好，记得给身体留恢复时间。</span></div>';
    drawWeightChart(s.records);const donePlan=state.settings.weeklyPlan.filter(x=>x.done).length;document.getElementById('planProgress').textContent=LANG==='en'?`${donePlan} / ${state.settings.weeklyPlan.length} completed`:`${donePlan} / ${state.settings.weeklyPlan.length} 已完成`;document.getElementById('weeklyPlan').innerHTML=state.settings.weeklyPlan.length?state.settings.weeklyPlan.map(item=>{const isDefault=DEFAULT_PLAN.some(plan=>plan.id===item.id),title=isDefault?(LANG==='en'&&item.titleEn?item.titleEn:localizedHtml(item.title)):userHtml(item.title),note=isDefault?(LANG==='en'&&item.noteEn?item.noteEn:localizedHtml(item.note)):userHtml(item.note);return`<div class="plan-item ${item.done?'done':''}"><button class="check-btn ${item.done?'checked':''}" data-action="toggle-plan" data-id="${item.id}">${item.done?icon('i-check'):''}</button><span><strong>${title}</strong><small>${t(item.group)} · ${note}</small></span><button class="plan-delete" data-action="delete-plan" data-id="${item.id}" aria-label="${t('删除计划')}">${icon('i-trash')}</button></div>`;}).join(''):empty('还没有周计划，点击右上角新增一项');
    document.getElementById('fitnessList').innerHTML=s.records.length?s.records.slice().reverse().slice(0,20).map(recordRow).join(''):empty('记录体重和体脂，关注趋势而不是单日数字');
  }

  function groupByDate(records){return records.reduce((groups,r)=>{(groups[r.date]||=[]).push(r);return groups;},{});}
  function renderPlanner(){
    const records=sortedRecords('planner'),today=isoDate(),weekEnd=shiftDate(6),filter=state.settings.plannerFilter;
    document.getElementById('plannerToday').textContent=records.filter(r=>r.date===today&&!r.data.done).length;document.getElementById('plannerOverdue').textContent=records.filter(r=>r.date<today&&!r.data.done).length;document.getElementById('plannerWeek').textContent=records.filter(r=>r.date>=today&&r.date<=weekEnd&&!r.data.done).length;
    document.getElementById('weekStrip').innerHTML=Array.from({length:7},(_,i)=>{const date=shiftDate(i),d=new Date(`${date}T00:00:00`),count=records.filter(r=>r.date===date&&!r.data.done).length,weekdays=LANG==='en'?['Sun','Mon','Tue','Wed','Thu','Fri','Sat']:['日','一','二','三','四','五','六'];return`<div class="week-day ${i===0?'today':''}"><span>${weekdays[d.getDay()]}</span><strong>${d.getDate()}</strong><small>${count?(LANG==='en'?`${count} items`:`${count} 项`):t('留白')}</small></div>`;}).join('');
    document.querySelectorAll('[data-planner-filter]').forEach(b=>b.classList.toggle('active',b.dataset.plannerFilter===filter));
    const filtered=records.filter(r=>filter==='all'||(filter==='today'&&r.date===today&&!r.data.done)||(filter==='scheduled'&&r.date>=today&&!r.data.done)||(filter==='done'&&r.data.done));const groups=groupByDate(filtered);
    document.getElementById('plannerList').innerHTML=Object.keys(groups).length?Object.entries(groups).map(([date,items],i)=>`<details class="date-group" ${i<3?'open':''}><summary><strong>${formatDateHeading(date)}</strong><span>${items.filter(x=>!x.data.done).length} 件待完成</span></summary><div class="group-body">${items.map(r=>taskRow(r,true)).join('')}</div></details>`).join(''):empty('这个智能清单里暂时没有事项');
  }

  function renderHome(){
    const records=sortedRecords('home'),filter=state.settings.shoppingFilter,month=isoDate().slice(0,7),pending=records.filter(r=>!r.data.bought),bought=records.filter(r=>r.data.bought);
    document.getElementById('homeTotal').textContent=pending.length;document.getElementById('homeBudget').textContent=money(sum(pending,r=>r.data.price));document.getElementById('homeBought').textContent=bought.filter(r=>(r.data.boughtDate||r.date).startsWith(month)).length;
    document.querySelectorAll('[data-shopping-filter]').forEach(b=>b.classList.toggle('active',b.dataset.shoppingFilter===filter));const filtered=records.filter(r=>filter==='all'||(filter==='pending'&&!r.data.bought)||(filter==='bought'&&r.data.bought));
    document.getElementById('homeList').innerHTML=filtered.length?filtered.map(r=>{const name=r.sample?localizedHtml(r.data.name):userHtml(r.data.name),quantity=r.sample?localizedHtml(r.data.quantity||'数量未填'):userHtml(r.data.quantity||t('数量未填')),note=r.data.note?(r.sample?` · ${localizedHtml(r.data.note)}`:` · ${userHtml(r.data.note)}`):'';return`<div class="shopping-row ${r.data.bought?'bought':''}"><button class="check-btn ${r.data.bought?'checked':''}" data-action="toggle-shopping" data-id="${r.id}">${r.data.bought?icon('i-check'):''}</button><span class="shopping-main"><strong>${r.data.priority==='high'?'<i class="urgent-dot"></i>':''}${name}</strong><small>${quantity} · ${localizedHtml(r.data.category||'其他')}${note}</small></span><span class="shopping-price"><strong>${r.data.price?money(r.data.price):t('待定')}</strong><small>${t(r.data.bought?'已买':'预计')}</small></span><button class="delete-btn" data-action="delete" data-id="${r.id}" aria-label="${t('删除')}">${icon('i-trash')}</button></div>`;}).join(''):empty(filter==='pending'?'待买清单已经清空':'这里还没有物品');
  }

  function renderMedia(){
    const year=String(new Date().getFullYear()),items=[...(state.mediaItems||[])].sort((a,b)=>b.date.localeCompare(a.date)),finished=items.filter(item=>item.status==='看完'&&item.date.startsWith(year)),rated=finished.filter(item=>item.rating>0);
    const average=rated.length?sum(rated,item=>item.rating)/rated.length:0,typeCounts={};finished.forEach(item=>typeCounts[item.type]=(typeCounts[item.type]||0)+1);const favorite=Object.entries(typeCounts).sort((a,b)=>b[1]-a[1])[0]?.[0]||'—';
    document.getElementById('mediaYear').textContent=year;document.getElementById('mediaFinished').textContent=`${finished.length} 部`;document.getElementById('mediaAverage').textContent=average?`${average.toFixed(1)} ★`:'—';document.getElementById('mediaFavorite').textContent=favorite;
    const distribution=Array.from({length:5},(_,i)=>rated.filter(item=>item.rating===i+1).length),max=Math.max(1,...distribution);document.getElementById('ratingDistribution').innerHTML=distribution.map((count,i)=>`<div class="rating-bar"><b>${count}</b><span style="--h:${Math.max(4,count/max*72)}px"></span><small>${i+1} 星</small></div>`).join('');
    document.querySelectorAll('[data-media-view]').forEach(button=>button.classList.toggle('active',button.dataset.mediaView===state.settings.mediaView));document.getElementById('mediaStatusFilter').value=state.settings.mediaStatusFilter;document.getElementById('mediaRatingFilter').value=String(state.settings.mediaRatingFilter||0);
    const filtered=items.filter(item=>(state.settings.mediaStatusFilter==='all'||item.status===state.settings.mediaStatusFilter)&&(!Number(state.settings.mediaRatingFilter)||item.rating>=Number(state.settings.mediaRatingFilter)));
    const collection=document.getElementById('mediaCollection');collection.className=state.settings.mediaView==='list'?'media-list':'media-wall';collection.innerHTML=filtered.length?filtered.map(item=>{const name=item.sample?localizedHtml(item.name):userHtml(item.name),plainName=item.sample?translateText(item.name):item.name,review=item.sample?localizedHtml(item.review):userHtml(item.review);return`<article class="media-card"><div class="media-cover">${item.cover?`<img src="${item.cover}" alt="${escapeHtml(plainName)}${t('封面')}">`:`<div class="media-placeholder">${name}</div>`}</div><div class="media-card-body"><h3 title="${escapeHtml(plainName)}" ${item.sample?'':'data-user-content'}>${name}</h3><div class="media-meta"><span>${t(item.type)} · ${t(item.status)}</span><span class="stars">${item.rating?'★'.repeat(item.rating):t('未评分')}</span></div>${item.review?`<p class="media-review">“${review}”</p>`:''}</div><button class="media-delete" data-action="delete-media" data-id="${item.id}" aria-label="${t('删除')}">${icon('i-trash')}</button></article>`;}).join(''):empty('这个筛选条件下还没有作品');
  }

  function renderArchive(){const filter=state.settings.archiveFilter||'all',records=sortedRecords().filter(r=>filter==='all'||r.type===filter),groups=groupByDate(records);document.querySelectorAll('#archiveFilters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));document.getElementById('archiveList').innerHTML=Object.keys(groups).length?Object.entries(groups).map(([date,items],i)=>`<details class="archive-day" ${i<3?'open':''}><summary><strong>${formatDateHeading(date)}</strong><span>${LANG==='en'?`${items.length} entries`:`${items.length} 条记录`}</span></summary><div class="group-body">${items.map(r=>{const meta=TYPE_META[r.type]||TYPE_META.home;return`<div class="archive-record"><span class="type-tag">${t(meta.label)}</span><span><strong>${recordTitleHtml(r)}</strong><small>${recordDetailHtml(r)}</small></span><span>${escapeHtml(valueFor(r))}</span></div>`;}).join('')}</div></details>`).join(''):empty('这个范围还没有记录');}
  function renderBackupStatus(){const count=Number(state.settings.recordsSinceExport||0),remaining=Math.max(0,20-count);document.getElementById('sidebarBackupBar').style.width=`${Math.min(100,count/20*100)}%`;document.getElementById('sidebarBackupText').textContent=count>=20?'建议现在导出备份':`距备份提醒还有 ${remaining} 条`;document.getElementById('backupAlert').hidden=count<20;document.getElementById('clearSamplesBtn').hidden=!state.records.some(r=>r.sample)&&!state.habits.some(h=>h.sample)&&!state.mediaItems.some(item=>item.sample);}
  function renderHabitManageList(){const list=document.getElementById('habitManageList');list.innerHTML=state.habits.length?state.habits.map(h=>{const isBuiltIn=HABIT_DEFS.some(def=>def.key===h.key)||h.sample,hdef=HABIT_DEFS.find(d=>d.key===h.key),unit=h.type==='check'?localizedHtml('次'):hdef?escapeHtml(resolveHabitUnit(hdef)):isBuiltIn?localizedHtml(h.unit):userHtml(h.unit);return`<div class="custom-manage-row"><span><strong>${habitNameHtml(h)}</strong><small>${t(h.type==='check'?'完成 / 未完成':h.type==='counter'?'计数累加':'填写数值')} · ${LANG==='en'?'Target':'目标'} ${h.target} ${unit}</small></span><button type="button" data-action="delete-habit-custom" data-id="${h.id}" aria-label="${t('删除习惯')}">${icon('i-trash')}</button></div>`;}).join(''):empty('还没有习惯');}
  function openHabitSettings(){renderHabitManageList();document.getElementById('habitSettings').hidden=false;setTimeout(()=>document.getElementById('habitSettingsForm').elements.name.focus(),80);}
  function closeHabitSettings(){document.getElementById('habitSettings').hidden=true;}
  function renderPlanManageList(){const list=document.getElementById('planManageList');list.innerHTML=state.settings.weeklyPlan.length?state.settings.weeklyPlan.map(item=>{const isDefault=DEFAULT_PLAN.some(plan=>plan.id===item.id),title=isDefault?(LANG==='en'&&item.titleEn?item.titleEn:localizedHtml(item.title)):userHtml(item.title),note=isDefault?(LANG==='en'&&item.noteEn?item.noteEn:localizedHtml(item.note||'无补充说明')):userHtml(item.note||t('无补充说明'));return`<div class="custom-manage-row"><span><strong>${title}</strong><small>${t(item.group)} · ${note}</small></span><button type="button" data-action="delete-plan" data-id="${item.id}" aria-label="${t('删除计划')}">${icon('i-trash')}</button></div>`;}).join(''):empty('还没有周计划');}
  function openPlanSettings(){renderPlanManageList();document.getElementById('planSettings').hidden=false;setTimeout(()=>document.getElementById('planSettingsForm').elements.title.focus(),80);}
  function closePlanSettings(){document.getElementById('planSettings').hidden=true;}
  function openFitnessProfile(){const form=document.getElementById('fitnessProfileForm'),profile=state.settings.fitnessProfile;['height','target','age','sex','activity'].forEach(key=>form.elements[key].value=profile[key]);document.getElementById('fitnessProfileSettings').hidden=false;setTimeout(()=>form.elements.height.focus(),80);}
  function closeFitnessProfile(){document.getElementById('fitnessProfileSettings').hidden=true;}

  function applyBrand(){
    const brand=state.settings.brand||{name:'日常集',avatar:'日',tagline:'生活有迹可循',theme:'plum'},isDefault=brand.name==='日常集'&&brand.avatar==='日'&&brand.tagline==='生活有迹可循';
    const themes={plum:{primary:'#4d3045',soft:'#e8dfe5'},forest:{primary:'#365f53',soft:'#dfe9e4'},clay:{primary:'#8f4f3b',soft:'#f0ddd6'},navy:{primary:'#344b63',soft:'#dde4eb'}};
    const theme=themes[brand.theme]||themes.plum;
    document.documentElement.style.setProperty('--plum',theme.primary);document.documentElement.style.setProperty('--plum-soft',theme.soft);document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme.primary);
    const avatar=document.getElementById('brandAvatar'),name=document.getElementById('brandName'),tagline=document.getElementById('brandTagline');[avatar,name,tagline].forEach(element=>element.toggleAttribute('data-user-content',!isDefault));avatar.textContent=isDefault?t('日'):(brand.avatar||'日');name.textContent=isDefault?t('日常集'):(brand.name||'日常集');tagline.textContent=isDefault?t('生活有迹可循'):(brand.tagline||'生活有迹可循');document.title=`${isDefault?t('日常集'):(brand.name||'日常集')} · ${t('生活工作台')}`;
  }
  function openBrandSettings(){const brand=state.settings.brand;const form=document.getElementById('brandForm');const isDefault=brand.name==='日常集'&&brand.avatar==='日'&&brand.tagline==='生活有迹可循';form.elements.name.value=isDefault&&LANG==='en'?'Daily Atlas':brand.name;form.elements.avatar.value=isDefault&&LANG==='en'?'D':brand.avatar;form.elements.tagline.value=isDefault&&LANG==='en'?'A life you can trace':brand.tagline;const radio=form.querySelector(`[name="theme"][value="${brand.theme}"]`);if(radio)radio.checked=true;updateBrandPreview();document.getElementById('brandSettings').hidden=false;setTimeout(()=>{localizeSubtree(document.getElementById('brandSettings'));form.elements.name.focus();},80);}
  function updateBrandPreview(){const form=document.getElementById('brandForm'),defName=LANG==='en'?'Daily Atlas':'日常集',defAvatar=LANG==='en'?'D':'日',defTagline=LANG==='en'?'A life you can trace':'生活有迹可循',values={name:form.elements.name.value||defName,avatar:form.elements.avatar.value||defAvatar,tagline:form.elements.tagline.value||defTagline},isDefault=(LANG==='en'?values.name==='Daily Atlas'&&values.avatar==='D'&&values.tagline==='A life you can trace':values.name===defName&&values.avatar===defAvatar&&values.tagline===defTagline);[['previewName','name'],['previewAvatar','avatar'],['previewTagline','tagline']].forEach(([id,key])=>{const element=document.getElementById(id);element.toggleAttribute('data-user-content',!isDefault);element.textContent=isDefault?t(values[key]):values[key];});}
  function closeBrandSettings(){document.getElementById('brandSettings').hidden=true;}
  function renderAll(){applyBrand();renderDashboard();renderMoney();renderHabits();renderFitness();renderPlanner();renderHome();renderMedia();renderArchive();renderBackupStatus();}

  function setDateDefaults(){document.querySelectorAll('input[type="date"][name="date"]').forEach(input=>{if(!input.value)input.value=isoDate();});}
  function serializeForm(form){const values={};Array.from(form.elements).forEach(field=>{if(!field.name||field.type==='submit'||(field.type==='radio'&&!field.checked))return;values[field.name]=field.type==='checkbox'?field.checked:field.value;});return values;}
  function restoreDrafts(){document.querySelectorAll('form[data-draft]').forEach(form=>{const name=form.dataset.draft;let draft=state.drafts[name];if(!draft){try{draft=JSON.parse(localStorage.getItem('richangji-draft-'+name)||'null');}catch(e){}}if(!draft)return;Object.entries(draft).forEach(([nm,value])=>form.querySelectorAll(`[name="${CSS.escape(nm)}"]`).forEach(field=>{if(field.type==='radio')field.checked=field.value===value;else if(field.type==='checkbox')field.checked=Boolean(value);else field.value=value;}));});updateMoneyCategories();}
  function clearDraft(form){const k='richangji-draft-'+(form.dataset.draft||'');try{localStorage.removeItem(k);}catch(e){}delete state.drafts[form.dataset.draft];form.reset();setDateDefaults();updateMoneyCategories();saveState();}
  function updateMoneyCategories(){const form=document.getElementById('moneyForm'),flow=form?.querySelector('[name="flow"]:checked')?.value||'expense',select=document.getElementById('moneyCategory');if(!select)return;const current=select.value,categories=flow==='income'?INCOME_CATEGORIES:EXPENSE_CATEGORIES;select.innerHTML=categories.map(c=>`<option ${c===current?'selected':''}>${c}</option>`).join('');}

  function downloadBlob(content,type,name){const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function exportBackup(){state.settings.lastExportAt=new Date().toISOString();state.settings.recordsSinceExport=0;state.settings.moneySinceExport=0;saveState();downloadBlob(JSON.stringify(state,null,2),'application/json',`${LANG==='en'?'daily-atlas-backup':'日常集备份'}-${isoDate()}.json`);renderBackupStatus();renderMoney();toast('备份已导出，请妥善保存');}
  function exportExcel(kind){
    let headers=[],rows=[],name=LANG==='en'?'daily-atlas':'日常集';
    if(kind==='money'){headers=LANG==='en'?['Date','Type','Category','Amount','Note']:['日期','类型','分类','金额','备注'];rows=sortedRecords('money').map(r=>[r.date,t(r.data.flow==='income'?'收入':'支出'),t(r.data.category),r.data.amount,r.sample?translateText(r.data.note||''):r.data.note||'']);name=LANG==='en'?'transactions':'记账流水';}
    else{headers=LANG==='en'?['Date','Weight (kg)','Body fat (%)','Calories (kcal)','Exercise (min)','Note']:['日期','体重(kg)','体脂率(%)','摄入热量(kcal)','运动分钟','备注'];rows=sortedRecords('fitness').map(r=>[r.date,r.data.weight||'',r.data.bodyFat||'',r.data.calories||'',r.data.duration||'',r.sample?translateText(r.data.note||''):r.data.note||'']);name=LANG==='en'?'fitness-log':'减脂记录';}
    const html=`<html><head><meta charset="UTF-8"></head><body><table border="1"><tr>${headers.map(h=>`<th>${escapeHtml(h)}</th>`).join('')}</tr>${rows.map(row=>`<tr>${row.map(v=>`<td>${escapeHtml(v)}</td>`).join('')}</tr>`).join('')}</table></body></html>`;downloadBlob(html,'application/vnd.ms-excel',`${name}-${isoDate()}.xls`);toast('Excel 已导出');
  }
  async function importBackup(file){try{const candidate=normalizeState(JSON.parse(await file.text()));if(!confirm(`将导入 ${candidate.records.length} 条记录，并替换当前数据。是否继续？`))return;state=candidate;state.settings.recordsSinceExport=0;state.settings.moneySinceExport=0;dataCorrupted=false;document.getElementById('corruptAlert').hidden=true;await rebuildAll();renderAll();restoreDrafts();toast('备份导入成功');}catch(error){toast(error.message||'导入失败，请检查备份文件');}}

  function compressCover(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=()=>reject(new Error('封面读取失败'));reader.onload=()=>{const image=new Image();image.onerror=()=>reject(new Error('封面格式不支持'));image.onload=()=>{const maxWidth=360,maxHeight=480,ratio=Math.min(maxWidth/image.width,maxHeight/image.height,1),canvas=document.createElement('canvas');canvas.width=Math.round(image.width*ratio);canvas.height=Math.round(image.height*ratio);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/jpeg',.72));};image.src=reader.result;};reader.readAsDataURL(file);});}

  function resetMediaCover(){pendingMediaCover='';const input=document.getElementById('mediaCoverInput'),preview=document.getElementById('mediaCoverPreview');input.value='';input.closest('.cover-upload').classList.remove('has-cover');preview.style.backgroundImage='';}

  function bindForms(){
    document.querySelectorAll('form[data-draft]').forEach(form=>form.addEventListener('input',()=>{state.drafts[form.dataset.draft]=serializeForm(form);try{localStorage.setItem('richangji-draft-'+(form.dataset.draft||''),JSON.stringify(state.drafts[form.dataset.draft]));}catch(e){}const saved=saveState(true);const status=document.querySelector(`[data-draft-for="${form.dataset.draft}"]`);if(status){status.textContent=saved?'草稿已保存':'草稿保存失败';if(saved)setTimeout(()=>status.textContent='草稿自动保存',900);}}));
    document.getElementById('moneyForm').addEventListener('change',e=>{if(e.target.name==='flow')updateMoneyCategories();});
    document.getElementById('moneyForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));if(!(Number(data.amount)>0))return toast('请输入有效金额');addRecord('money',data.date,{flow:data.flow,amount:Number(data.amount),category:data.category,note:data.note.trim()}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});
    document.getElementById('fitnessForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));if(!(Number(data.weight)>0))return toast('请记录今天的体重');addRecord('fitness',data.date,{weight:Number(data.weight),bodyFat:data.bodyFat?Number(data.bodyFat):null,calories:Number(data.calories||0),duration:Number(data.duration||0),note:data.note.trim()}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});
    document.getElementById('plannerForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));addRecord('planner',data.date,{title:data.title.trim(),time:data.time,priority:data.priority,list:data.list,note:data.note.trim(),remind:data.remind==='1',done:false}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});
    document.getElementById('homeForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));addRecord('home',isoDate(),{name:data.name.trim(),quantity:data.quantity.trim(),category:data.category,price:Number(data.price||0),priority:data.priority,note:data.note.trim(),bought:false}).then(ok=>{if(ok)clearDraft(e.currentTarget);});});
    document.getElementById('mediaCoverInput').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;if(file.size>12*1024*1024){toast('封面图片请控制在 12MB 以内');e.target.value='';return;}try{pendingMediaCover=await compressCover(file);const preview=document.getElementById('mediaCoverPreview');preview.style.backgroundImage=`url(${pendingMediaCover})`;preview.closest('.cover-upload').classList.add('has-cover');toast('封面已压缩，可以保存了');}catch(error){toast(error.message);resetMediaCover();}});
    document.getElementById('mediaForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const item={id:uid(),name:data.name.trim(),type:data.type,status:data.status,rating:Number(data.rating||0),review:data.review.trim(),date:data.date,cover:pendingMediaCover,sample:false};state.mediaItems.push(item);persistMedia(item).then(ok=>{saveState(true);renderAll();if(ok){clearDraft(e.currentTarget);resetMediaCover();toast('已加入书影音清单');}else{showSyncError();}});});
    document.getElementById('habitTypeSelect').addEventListener('change',e=>{const form=document.getElementById('habitSettingsForm'),isCheck=e.target.value==='check';form.elements.target.value=isCheck?'1':form.elements.target.value;form.elements.unit.value=isCheck?'次':form.elements.unit.value;document.getElementById('habitTargetFields').classList.toggle('is-check',isCheck);});
    document.getElementById('habitSettingsForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget)),isCheck=data.type==='check';const habit={id:uid(),key:`custom-${uid()}`,name:data.name.trim(),type:data.type,target:isCheck?1:Math.max(.1,Number(data.target||1)),unit:isCheck?'次':data.unit.trim()||'次',tone:data.tone,entries:{},sample:false};state.habits.push(habit);persistHabit(habit).then(ok=>{saveState();renderAll();renderHabitManageList();if(ok){e.currentTarget.reset();document.getElementById('habitTypeSelect').dispatchEvent(new Event('change'));toast('新习惯已加入');}else showSyncError();});});
    document.getElementById('planSettingsForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const plan={id:uid(),group:data.group,title:data.title.trim(),note:data.note.trim()||'按自己的节奏完成',done:false,sample:false};state.settings.weeklyPlan.push(plan);persistPlan(plan).then(ok=>{saveState();renderFitness();renderPlanManageList();if(ok)toast('新计划已加入');else showSyncError();});});
    document.getElementById('fitnessProfileForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));state.settings.fitnessProfile=Object.assign(state.settings.fitnessProfile,{height:Number(data.height),target:Number(data.target),age:Number(data.age),sex:data.sex,activity:Number(data.activity)});persistSettings().then(ok=>{saveState();renderFitness();closeFitnessProfile();if(ok)toast('目标设置已更新');else showSyncError();});});
  }

  async function updateHabit(id,operation,value){const h=state.habits.find(x=>x.id===id);if(!h)return;const today=isoDate(),current=Number(h.entries[today]||0);if(operation==='plus')h.entries[today]=current+1;if(operation==='minus')h.entries[today]=Math.max(0,current-1);if(operation==='toggle')h.entries[today]=habitDone(h)?0:1;if(operation==='quick')h.entries[today]=habitDone(h)?0:Number(h.target||1);if(operation==='number')h.entries[today]=clamp(Number(value||0),0,9999);try{ await persistHabitEntry(h.id,today,Number(h.entries[today]||0)); }catch(e){ showSyncError(); return; }const justDone=habitDone(h),saved=saveState();renderAll();if(justDone){celebrate();const name=HABIT_DEFS.some(def=>def.key===h.key)||h.sample?translateText(h.name):h.name;toast(LANG==='en'?`${name} completed — nicely done`:`${h.name}，完成得漂亮`);}}
  async function toggleTask(id){const task=state.records.find(r=>r.id===id&&r.type==='planner');if(!task)return;task.data.done=!task.data.done;try{ await persistRecord(task); }catch(e){ showSyncError(); return; }const saved=saveState();renderAll();if(saved&&task.data.done){celebrate();toast('完成一项，心里轻一点');}}

  function bindEvents(){
    document.getElementById('brandSettingsBtn').addEventListener('click',openBrandSettings);
    document.getElementById('brandForm').addEventListener('input',updateBrandPreview);
    document.getElementById('brandForm').addEventListener('submit',event=>{event.preventDefault();const data=Object.fromEntries(new FormData(event.currentTarget));state.settings.brand={name:data.name.trim()||'日常集',avatar:data.avatar.trim()||'日',tagline:data.tagline.trim()||'生活有迹可循',theme:data.theme||'plum'};persistSettings().then(ok=>{saveState();applyBrand();closeBrandSettings();if(ok)toast('工作台外观已更新');else showSyncError();});});
    document.getElementById('brandSettings').addEventListener('click',event=>{if(event.target.id==='brandSettings')closeBrandSettings();});
    document.getElementById('habitSettings').addEventListener('click',event=>{if(event.target.id==='habitSettings')closeHabitSettings();});
    document.getElementById('planSettings').addEventListener('click',event=>{if(event.target.id==='planSettings')closePlanSettings();});
    document.getElementById('fitnessProfileSettings').addEventListener('click',event=>{if(event.target.id==='fitnessProfileSettings')closeFitnessProfile();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeBrandSettings();closeHabitSettings();closePlanSettings();closeFitnessProfile();}});
    document.addEventListener('click',event=>{
      const nav=event.target.closest('[data-nav]');if(nav)switchView(nav.dataset.nav);
      const quick=event.target.closest('[data-quick]');if(quick){switchView(quick.dataset.quick);setTimeout(()=>document.querySelector(`#view-${quick.dataset.quick} input:not([type=\"radio\"])`)?.focus(),200);}
      const action=event.target.closest('[data-action]');if(!action)return;const id=action.dataset.id,type=action.dataset.action;
      if(type==='retry-sync'){loadFromServer();return;}
      if(type==='delete')deleteRecord(id);
      if(type==='toggle-task')toggleTask(id);
      if(type==='habit-plus')updateHabit(id,'plus');if(type==='habit-minus')updateHabit(id,'minus');if(type==='habit-toggle')updateHabit(id,'toggle');if(type==='habit-quick')updateHabit(id,'quick');
      if(type==='toggle-plan'){const item=state.settings.weeklyPlan.find(x=>x.id===id);if(item){item.done=!item.done;persistPlan(item).then(ok=>{saveState();renderFitness();if(ok&&item.done)celebrate();});}}
      if(type==='delete-habit-custom'){const habit=state.habits.find(h=>h.id===id);if(habit&&confirm(LANG==='en'?`Delete the habit \"${habit.name}\" and all of its history?`:`确定删除习惯\"${habit.name}\"吗？历史打卡也会一起删除。`)){state.habits=state.habits.filter(h=>h.id!==id);if(HABIT_DEFS.some(def=>def.key===habit.key)){state.settings.hiddenHabitKeys=[...new Set([...(state.settings.hiddenHabitKeys||[]),habit.key])];}persistDeleteHabit(habit).then(ok=>{saveState();renderAll();renderHabitManageList();if(ok)toast('习惯已删除');else showSyncError();});}}
      if(type==='delete-plan'){const item=state.settings.weeklyPlan.find(x=>x.id===id);if(item&&confirm(LANG==='en'?`Delete the plan \"${item.title}\"?`:`确定删除计划\"${item.title}\"吗？`)){state.settings.weeklyPlan=state.settings.weeklyPlan.filter(x=>x.id!==id);persistDeletePlan(item.id).then(ok=>{saveState();renderFitness();renderPlanManageList();if(ok)toast('计划已删除');else showSyncError();});}}
      if(type==='toggle-shopping'){const item=state.records.find(r=>r.id===id&&r.type==='home');if(item){item.data.bought=!item.data.bought;item.data.boughtDate=item.data.bought?isoDate():null;persistRecord(item).then(ok=>{saveState();renderAll();if(ok&&item.data.bought){celebrate();toast('买到了，已移入完成');}else if(!ok)showSyncError();});}}
      if(type==='delete-media'){const item=state.mediaItems.find(media=>media.id===id);if(item&&confirm(LANG==='en'?`Remove \"${item.name}\" from the list?`:`确定从清单中删除\"${item.name}\"吗？`)){state.mediaItems=state.mediaItems.filter(media=>media.id!==id);persistDeleteMedia(id).then(ok=>{saveState();renderMedia();if(ok)toast('已从书影音清单移除');else showSyncError();});}}
      if(type==='open-habit-settings')openHabitSettings();if(type==='close-habit-settings')closeHabitSettings();if(type==='open-plan-settings')openPlanSettings();if(type==='close-plan-settings')closePlanSettings();if(type==='open-fitness-profile')openFitnessProfile();if(type==='close-fitness-profile')closeFitnessProfile();
      if(type==='export-backup')exportBackup();if(type==='open-import')document.getElementById('importFile').click();if(type==='export-money')exportExcel('money');if(type==='export-fitness')exportExcel('fitness');if(type==='close-brand')closeBrandSettings();if(type==='reset-brand'){state.settings.brand={name:'日常集',avatar:'日',tagline:'生活有迹可循',theme:'plum'};persistSettings().then(()=>{saveState();applyBrand();openBrandSettings();toast('已恢复默认外观');});}
    });
    document.addEventListener('change',event=>{if(event.target.dataset.action==='habit-number')updateHabit(event.target.dataset.id,'number',event.target.value);});
    document.getElementById('budgetInput').addEventListener('change',e=>{state.settings.budget=Math.max(0,Number(e.target.value||0));persistSettings().then(ok=>{saveState();renderAll();if(ok)toast('月度预算已更新');else showSyncError();});});
    document.getElementById('moneyFilter').addEventListener('change',e=>{state.settings.moneyFilter=e.target.value;saveState();renderMoney();persistSettings();});
    document.getElementById('plannerFilters').addEventListener('click',e=>{const b=e.target.closest('[data-planner-filter]');if(!b)return;state.settings.plannerFilter=b.dataset.plannerFilter;saveState();renderPlanner();persistSettings();});
    document.getElementById('shoppingFilters').addEventListener('click',e=>{const b=e.target.closest('[data-shopping-filter]');if(!b)return;state.settings.shoppingFilter=b.dataset.shoppingFilter;saveState();renderHome();persistSettings();});
    document.getElementById('archiveFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;state.settings.archiveFilter=b.dataset.filter;saveState();renderArchive();persistSettings();});
    document.querySelectorAll('[data-media-view]').forEach(button=>button.addEventListener('click',()=>{state.settings.mediaView=button.dataset.mediaView;saveState();renderMedia();persistSettings();}));
    document.getElementById('mediaStatusFilter').addEventListener('change',e=>{state.settings.mediaStatusFilter=e.target.value;saveState();renderMedia();persistSettings();});
    document.getElementById('mediaRatingFilter').addEventListener('change',e=>{state.settings.mediaRatingFilter=Number(e.target.value);saveState();renderMedia();persistSettings();});
    document.getElementById('clearSamplesBtn').addEventListener('click',()=>{const recordSamples=state.records.filter(r=>r.sample).length,mediaSamples=state.mediaItems.filter(item=>item.sample).length,sampleCount=recordSamples+mediaSamples;if(!sampleCount&&!state.habits.some(h=>h.sample))return;if(!confirm(`将清空 ${sampleCount} 条示例记录和示例打卡，你自己的内容会保留。是否继续？`))return;state.records=state.records.filter(r=>!r.sample);state.mediaItems=state.mediaItems.filter(item=>!item.sample);state.habits.forEach(h=>{if(h.sample){h.entries={};h.sample=false;}});state.settings.weeklyPlan=DEFAULT_PLAN.map(x=>({...x}));rebuildAll().then(ok=>{renderAll();if(ok)toast('示例内容已清空');else showSyncError();});});
    ['exportBtn'].forEach(id=>document.getElementById(id).addEventListener('click',exportBackup));document.getElementById('importBtn').addEventListener('click',()=>document.getElementById('importFile').click());document.getElementById('importFile').addEventListener('change',e=>{const file=e.target.files[0];if(file)importBackup(file);e.target.value='';});
  }

  function init(){const now=new Date(),weekdays=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];document.getElementById('todayLabel').textContent=LANG==='en'?new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',weekday:'long'}).format(now):`${now.getMonth()+1} 月 ${now.getDate()} 日 · ${weekdays[now.getDay()]}`;document.getElementById('corruptAlert').hidden=true;setDateDefaults();updateMoneyCategories();restoreDrafts();bindForms();bindEvents();renderAll();switchView(document.getElementById(`view-${location.hash.slice(1)}`)?location.hash.slice(1):'dashboard');registerSync();loadFromServer();}
  startI18n();
  document.addEventListener('DOMContentLoaded',init);
})();

  