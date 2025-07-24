// JS
document.getElementById("nextBtn").addEventListener("click", nextCard);
document.getElementById("replayBtn").addEventListener("click", replay);

const words = [
  {
    "en": "dynamic",    "zh": "有活力的,有生機的"},
  {    "en": "prosperous",    "zh": "繁榮的"},
  {    "en": "brisk",    "zh": "興隆的"},
  {
    "en": "volatile",
    "zh": "不穩定的, 活躍浮動的"
  },
  {
    "en": "bleak",
    "zh": "慘澹淒涼的"
  },
  {
    "en": "declining",
    "zh": "下滑的,衰退的"
  },
  {
    "en": "slump",
    "zh": "委靡的"
  },
  {
    "en": "sluggish",
    "zh": "不景氣,蕭條的"
  },
  {
    "en": "stagnant",
    "zh": "停滯不前的, 蕭條的"
  },
    {
    "en": "merchandise",
    "zh": "商品(集合名詞)(單數)"
  },
  {
    "en": "goods",
    "zh": "貨物(複)"
  },
  {
    "en": "commodity",
    "zh": "商品, 期貨 futures"
  },
  {
    "en": "product",
    "zh": "產品"
  },
  {
    "en": "produce",
    "zh": "農產品"
  },
  {
    "en": "freight",
    "zh": "運輸的貨物 ; 運費"
  },
  {
    "en": "cargo",
    "zh": "(船,飛機)裝載的貨物 convoke 召集"
  },
    {
    "en": "convoke",
    "zh": "召集"
  },
  {
    "en": "rally",
    "zh": "集合"
  },
  {
    "en": "gathering",
    "zh": "聚會"
  },
  {
    "en": "function",
    "zh": "集會，儀式 event"
  },  {
    "en": "adjourn",
    "zh": "延會,休會"
  },  {
    "en": "confer",
    "zh": "商談"
  },
  {
    "en": "mug",
    "zh": "搶劫,(從背後襲擊)"
  },
  {
    "en": "steal",
    "zh": "偷"
  },
  {
    "en": "loot",
    "zh": "搶奪"
  },
  {
    "en": "pickpocket",
    "zh": "扒手"
  },
  {
    "en": "burglary",
    "zh": "夜盜"
  },
  {
    "en": "smuggle",
    "zh": "走私"
  },
  {
    "en": "by cash",
    "zh": "現金"
  },
  {
    "en": "by check",
    "zh": "支票"
  },
  {
    "en": "by credit card",
    "zh": "信用卡"
  },
  {
    "en": "by money order",
    "zh": "匯票"
  },
  {
    "en": "by installment",
    "zh": "分期付款"
  },
  {
    "en": "by mail",
    "zh": "郵寄"
  },
  {
    "en": "outgoing",
    "zh": "外向活潑"
  },
  {
    "en": "sociable",
    "zh": "善於交際"
  },
  {
    "en": "adaptable",
    "zh": "適應性強"
  },
  {
    "en": "ambitious",
    "zh": "有野心"
  },
  {
    "en": "hard-working",
    "zh": "工作努力"
  },
  {
    "en": "energetic",
    "zh": "有活力"
  },
  {
    "en": "enterprising",
    "zh": "富於進取,有創業精神"
  },
  {
    "en": "honest",
    "zh": "誠實"
  },
  {
    "en": "reserved",
    "zh": "保守,穩重"
  },
  {
    "en": "responsible",
    "zh": "負責"
  },
  {
    "en": "optimistic",
    "zh": "樂觀"
  },
  {
    "en": "independent",
    "zh": "獨立"
  },
  {
    "en": "inflation",
    "zh": "通貨膨脹"
  },
  {
    "en": "deflation",
    "zh": "通貨緊縮"
  },
  {
    "en": "feasibility",
    "zh": "可行性"
  },
  {
    "en": "overhaul",
    "zh": "徹底檢查"
  },
  {
    "en": "custom",
    "zh": "海關"
  },
  {
    "en": "bruise",
    "zh": "擦傷"
  },
  {
    "en": "indices",
    "zh": "指數, 是 index 的複數"
  },
  {
    "en": "commotion",
    "zh": "暴動,騷亂"
  },
  {
    "en": "interest rate",
    "zh": "利率"
  },
  {
    "en": "disposition",
    "zh": "性情氣質,處理"
  },
  {
    "en": "carat, karat",
    "zh": "克拉"
  },
  {
    "en": "hallmark",
    "zh": "品質證明, 純正之證明"
  },
  {
    "en": "asylum",
    "zh": "收容所, 養老院"
  },
  {
    "en": "orphanage",
    "zh": "孤兒院"
  },
  {
    "en": "morale",
    "zh": "士氣,人心"
  },
  {
    "en": "pennant",
    "zh": "錦旗"
  },
  {
    "en": "vicinity",
    "zh": "附近, 短語是 in the ~ of"
  },
  {
    "en": "interrogation",
    "zh": "詢問,審訊 短語是 put sb under ~"
  },
  {
    "en": "intersection",
    "zh": "交點"
  },
  {
    "en": "intermission",
    "zh": "休息時間"
  },
  {
    "en": "physician",
    "zh": "內科醫生"
  },
  {
    "en": "surgeon",
    "zh": "外科醫生, 軍醫,船醫"
  },
  {
    "en": "breadwinner",
    "zh": "養家糊口的人"
  },
  {
    "en": "recipe",
    "zh": "食譜,方法"
  },
  {
    "en": "tender",
    "zh": "招標,a public ~, ask for tender"
  },
  {
    "en": "syllabus",
    "zh": "課程綱要"
  },
  {
    "en": "Spaniard",
    "zh": "西班牙人"
  },
  {
    "en": "dispassion",
    "zh": "冷靜客觀"
  },
  {
    "en": "levity",
    "zh": "輕率"
  },
  {
    "en": "expulsion",
    "zh": "開除,除籍"
  },
  {
    "en": "defamation",
    "zh": "誹謗"
  },
  {
    "en": "payroll",
    "zh": "薪水冊,工資表"
  },
  {
    "en": "contraction",
    "zh": "收縮"
  },
  {
    "en": "renewal",
    "zh": "更新"
  },
  {
    "en": "deduction",
    "zh": "扣除(額)"
  },
  {
    "en": "escalator",
    "zh": "電動扶梯"
  },
  {
    "en": "elevator",
    "zh": "電梯,升降梯(美)"
  },
  {
    "en": "lift",
    "zh": "電梯(英)"
  },
  {
    "en": "emblem",
    "zh": "象徵標誌 同 logo symbol"
  },
  {
    "en": "dereliction",
    "zh": "怠忽職守 ~ of duty"
  },
  {
    "en": "milk shake",
    "zh": "奶昔"
  },
  {
    "en": "endorsement",
    "zh": "背書保證,找明星代言"
  },
  {
    "en": "approbation",
    "zh": "批准許可"
  },
  {
    "en": "probation",
    "zh": "試用 trial"
  },
  {
    "en": "deference",
    "zh": "順從尊重"
  },
  {
    "en": "minor infraction",
    "zh": "輕微違法 major violation 重大"
  },
  {
    "en": "vacate",
    "zh": "疏散 evacuation"
  },
  {
    "en": "anarchy",
    "zh": "無政府"
  },
  {
    "en": "collusion",
    "zh": "共謀,勾結"
  },
  {
    "en": "downturn",
    "zh": "下滑 take a sudden downturn"
  },
  {
    "en": "spa",
    "zh": "溫泉"
  },
  {
    "en": "freelance writer",
    "zh": "自由撰稿人"
  },
  {
    "en": "articles",
    "zh": "用品,商品"
  },
  {
    "en": "management",
    "zh": "資方 union 工會"
  },
  {
    "en": "turnover",
    "zh": "運轉,周轉"
  },
  {
    "en": "turnout (",
    "zh": "集會)出席者 a large turnout"
  },
  {
    "en": "annuity",
    "zh": "養老金 =pension"
  },
  {
    "en": "extension",
    "zh": "分機"
  },
  {
    "en": "innovation",
    "zh": "革新翻新, renovation 裝修"
  },
  {
    "en": "dosage",
    "zh": "劑量"
  },
  {
    "en": "rash",
    "zh": "疹子"
  },
  {
    "en": "clientele",
    "zh": "顧客,老主顧"
  },
  {
    "en": "leave",
    "zh": "請假 He is often absent without leave"
  },
  {
    "en": "partition",
    "zh": "隔間,區分"
  },
  {
    "en": "junk",
    "zh": "垃圾"
  },
    {
    "en": "punk",
    "zh": "朋克"
  },
  { "en": "menopause", "zh": "更年期" },
  { "en": "razor", "zh": "剃刀" },
  { "en": "crop strains", "zh": "作物品種" },
  { "en": "headphone", "zh": "耳機" },
  { "en": "automated teller machine", "zh": "自動提款機 ATM" },
  { "en": "civilians", "zh": "平民（注意與 surveillance 區分）" },
  { "en": "subsidiary", "zh": "子公司" },
  { "en": "strip mining", "zh": "露天採礦" },
  { "en": "national", "zh": "國民（某國的）" },
  { "en": "mortgage", "zh": "抵押" },
  { "en": "compartment", "zh": "隔間" },
  { "en": "helping", "zh": "(食物的)一分" },
  { "en": "subcontractor", "zh": "轉包商" },
  { "en": "speculation", "zh": "投機" },
  { "en": "avocation", "zh": "副業" },
  { "en": "kickback", "zh": "回扣" },
  { "en": "spectator", "zh": "觀眾" },
  { "en": "stroller", "zh": "四輪嬰兒車，漫步者" },
  { "en": "seniority", "zh": "年長，資深" },
  { "en": "toner", "zh": "調色劑" },
  { "en": "luncheon", "zh": "正式午餐，下午餐會" },
  { "en": "façade", "zh": "建築物正面" },
  { "en": "decoy", "zh": "欺騙，引誘" },
  { "en": "interface", "zh": "交互介面" },
  { "en": "boutiques", "zh": "小店，精品店" },
  { "en": "casino", "zh": "俱樂部，遊樂場" },
  { "en": "complex", "zh": "整套設施" },
  { "en": "commencement ceremony", "zh": "授學位典禮" },
  { "en": "inception", "zh": "開始" },
  { "en": "induction", "zh": "入伍" },
  { "en": "modem", "zh": "數據機" },
  { "en": "fraud", "zh": "詐騙" },
  { "en": "magnate", "zh": "工業巨頭" },
  { "en": "gourmet", "zh": "美食家" },
  { "en": "ordinance", "zh": "法令" },
  { "en": "cursor", "zh": "游標" },
  { "en": "liaison", "zh": "交流合作" },
  { "en": "portfolio", "zh": "公事包，文件夾" },
  { "en": "corrosives", "zh": "易腐蝕品" },
  { "en": "corporation", "zh": "企業（注意與 cooperation 區分）" },
  { "en": "minute", "zh": "會議錄" },
  { "en": "recreation", "zh": "娛樂，休閒" },
  { "en": "strand", "zh": "使擱淺，陷入困境" },
  { "en": "relate", "zh": "敘述" },
  { "en": "facilitate", "zh": "使便利" },
  { "en": "excel", "zh": "優出勝出" },
  { "en": "exceed", "zh": "超過" },
  { "en": "remit", "zh": "匯款，寬恕" },
  { "en": "highlight", "zh": "強調" },
  { "en": "inoculate", "zh": "接種" },
  { "en": "vaccinate", "zh": "接種疫苗" },
  { "en": "remedy", "zh": "補救" },
  { "en": "undermine", "zh": "詆毀" },
  { "en": "reverse", "zh": "顛倒" },
  { "en": "slam", "zh": "使勁關" },
  { "en": "equip", "zh": "配備" },
  { "en": "capsize", "zh": "傾覆（船）" },
  { "en": "simmer", "zh": "燉，煨" },
  { "en": "retrench", "zh": "減少，節約" },
  { "en": "discredit", "zh": "使失去權威性，破壞名譽" },
  { "en": "curb", "zh": "阻止，控制" },
  { "en": "process", "zh": "加工" },
  { "en": "intercept", "zh": "中途攔截" },
  { "en": "segregate", "zh": "隔離，分開" },
  { "en": "quarantine", "zh": "隔離檢疫" },
  { "en": "seclude", "zh": "隔絕，隱退，隱秘" },
  { "en": "appeal", "zh": "呼籲，懇求，上訴" },
  { "en": "lift", "zh": "解除，提起精神" },
  { "en": "rescind", "zh": "廢止，取消" },
  { "en": "audit", "zh": "查帳" },
  { "en": "condemn", "zh": "非難，判罪" },
  { "en": "condone", "zh": "寬恕，容忍" },
  { "en": "deviate", "zh": "偏離，跑題" },
  { "en": "disabuse", "zh": "解惑，矯正" },
  { "en": "disavow", "zh": "否認" },
  { "en": "transfuse", "zh": "輸血" },
  { "en": "mingle", "zh": "交往，混合" },
  { "en": "forfeit", "zh": "沒收" },
  { "en": "staple", "zh": "用訂書器釘；主要的，重要的（形容詞）" },
  { "en": "deregulate", "zh": "解除對---的管制" },
  { "en": "block", "zh": "阻擋；樓（名詞）" },
  { "en": "launch", "zh": "推出新產品，實施" },
  { "en": "house", "zh": "為---提供住房" },
  { "en": "expel", "zh": "開除，驅除" },
  { "en": "reimburse", "zh": "報銷，退款" },
  { "en": "observe", "zh": "遵守" },
  { "en": "syndicate", "zh": "多家報刊同時發表" },
  { "en": "commute", "zh": "通勤" },
  { "en": "rotate", "zh": "旋轉，迴圈" },
  { "en": "implement", "zh": "實行" },
  { "en": "liquidate", "zh": "清算，清償債務" },
  { "en": "accrue", "zh": "增長，自然增殖" }

];

let currentIndex = -1;
let showingTranslation = false;

const flashcard = document.getElementById("flashcard");

function nextCard() {
    let newIndex;
    do {
    newIndex = Math.floor(Math.random() * words.length);
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
    showingTranslation = false;
    flashcard.textContent = words[currentIndex].en;
    speakWord(words[currentIndex].en);
}

flashcard.addEventListener("click", () => {
    if (showingTranslation) {
        flashcard.textContent = words[currentIndex].en;
        showingTranslation = false;
      } else {
        flashcard.textContent = words[currentIndex].zh;
        showingTranslation = true;
      }
    });

function speakWord(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9; // 語速調整（0.1 ~ 10）
  speechSynthesis.cancel(); // 先停止前一個朗讀
  speechSynthesis.speak(utterance);
}

function replay() {
      speakWord(words[currentIndex].en);
    }


// 初始顯示第一張
nextCard();

function goBack() {
    window.location.href = "https://ChiaYunn.github.io/front_page.html";
}