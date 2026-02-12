// example
const quizData = [
  { word: "girl", answer: "女孩", lessonId:'1-1'},
  { word: "boy", answer: "男孩", lessonId:'1-1'},
  { word: "man", answer: "男人", lessonId:'1-1'},
  { word: "woman", answer: "女人", lessonId:'1-1'},
  { word: "student", answer: "學生", lessonId:'1-1'},
  { word: "teacher", answer: "老師", lessonId:'1-1'},

  { word: "me", answer: "我", lessonId:'1-2'},
  { word: "mother", answer: "媽媽", lessonId:'1-2'},
  { word: "father", answer: "爸爸", lessonId:'1-2'},
  { word: "grandmother", answer: "外婆 / 祖母", lessonId:'1-2'},
  { word: "grandfather", answer: "外公 / 祖父", lessonId:'1-2'},
  { word: "uncle", answer: "叔叔 / 舅舅" , lessonId:'1-2'},
  { word: "aunt", answer: "阿姨 / 姑姑", lessonId:'1-2'},
  { word: "cousin(s)", answer: "堂/表兄弟姊妹", lessonId:'1-2'},
  { word: "brother", answer: "兄弟", lessonId:'1-2'},
  { word: "sister", answer: "姊妹", lessonId:'1-2'},
  { word: "tree", answer: "樹", lessonId:'1-2'},
  { word: "family", answer: "家庭", lessonId:'1-2'},
  { word: "unit", answer: "單元", lessonId:'1-2'},
  { word: "listen", answer: "聽", lessonId:'1-2'},
  { word: "talk", answer: "說", lessonId:'1-2'},
  { word: "and", answer: "和", lessonId:'1-2'},

  { word: "zero", answer: "零", lessonId:'1-3'},
  { word: "one", answer: "一", lessonId:'1-3'},
  { word: "two", answer: "二", lessonId:'1-3'},
  { word: "three", answer: "三", lessonId:'1-3'},
  { word: "four", answer: "四", lessonId:'1-3'},
  { word: "five", answer: "五", lessonId:'1-3'},
  { word: "six", answer: "六", lessonId:'1-3'},
  { word: "seven", answer: "七", lessonId:'1-3'},
  { word: "eight", answer: "八", lessonId:'1-3'},
  { word: "nine", answer: "九", lessonId:'1-3'},
  { word: "ten", answer: "十", lessonId:'1-3'},
  { word: "number", answer: "數字", lessonId:'1-3'},
  { word: "year", answer: "年", lessonId:'1-3'},

  { word: "stationery", answer: "文具", lessonId:'1-4'},
  { word: "pen", answer: "筆", lessonId:'1-4'},
  { word: "pencil case", answer: "鉛筆盒", lessonId:'1-4'},
  { word: "school bag", answer: "書包", lessonId:'1-4'},
  { word: "eraser", answer: "橡皮擦", lessonId:'1-4'},
  { word: "table", answer: "桌子", lessonId:'1-4'},
  { word: "chair", answer: "椅子", lessonId:'1-4'},
  { word: "book", answer: "書", lessonId:'1-4'},

  { word: "sad", answer: "難過的", lessonId:'1-5'},
  { word: "happy", answer: "快樂的", lessonId:'1-5'},
  { word: "young", answer: "年輕的", lessonId:'1-5'},
  { word: "old", answer: "年老的", lessonId:'1-5'},
  { word: "chubby", answer: "圓胖的", lessonId:'1-5'},
  { word: "thin", answer: "瘦的", lessonId:'1-5'},
  { word: "short", answer: "矮的", lessonId:'1-5'},
  { word: "tall", answer: "高的", lessonId:'1-5'},
  { word: "cute", answer: "可愛的", lessonId:'1-5'},

  { word: "color", answer: "顏色", lessonId:'1-6'},
  { word: "red", answer: "紅色", lessonId:'1-6'},
  { word: "yellow", answer: "黃色", lessonId:'1-6'},
  { word: "blue", answer: "藍色", lessonId:'1-6'},
  { word: "pink", answer: "粉紅色", lessonId:'1-6'},
  { word: "purple", answer: "紫色", lessonId:'1-6'},
  { word: "white", answer: "白色", lessonId:'1-6'},
  { word: "black", answer: "黑色", lessonId:'1-6'},
  { word: "brown", answer: "咖啡色", lessonId:'1-6'},
  { word: "green", answer: "綠色", lessonId:'1-6'},
  { word: "orange", answer: "橘色", lessonId:'1-6'},

  { word: "hungry", answer: "餓的", lessonId:'1-7'},
  { word: "angry", answer: "生氣的", lessonId:'1-7'},
  { word: "quiet", answer: "安靜的", lessonId:'1-7'},
  { word: "sleepy", answer: "愛睏的", lessonId:'1-7'},
  { word: "thirsty", answer: "口渴的", lessonId:'1-7'},
  { word: "noisy", answer: "吵鬧的", lessonId:'1-7'},
  { word: "lazy", answer: "懶惰的", lessonId:'1-7'},
  { word: "tired", answer: "累的", lessonId:'1-7'},

  { word: "dress", answer: "洋裝", lessonId:'1-8'},
  { word: "T-shirt", answer: "T恤", lessonId:'1-8'},
  { word: "skirt", answer: "裙子", lessonId:'1-8'},
  { word: "coat", answer: "大衣", lessonId:'1-8'},
  { word: "jacket", answer: "外套", lessonId:'1-8'},
  { word: "hat", answer: "帽子", lessonId:'1-8'},

  { word: "duck", answer: "鴨子", lessonId:'1-9'},
  { word: "pig", answer: "豬", lessonId:'1-9'},
  { word: "rabbit", answer: "兔子", lessonId:'1-9'},
  { word: "cow", answer: "牛", lessonId:'1-9'},
  { word: "chicken", answer: "雞", lessonId:'1-9'},
  { word: "sheep", answer: "綿羊", lessonId:'1-9'},
  { word: "rat", answer: "老鼠", lessonId:'1-9'},
  { word: "dog", answer: "狗", lessonId:'1-9'},
  { word: "cat", answer: "貓", lessonId:'1-9'},
  { word: "horse", answer: "馬", lessonId:'1-9'},



  /* Volume-2 */
  { word: "classroom", answer: "教室", lessonId:'2-1'},
  { word: "window", answer: "窗戶", lessonId:'2-1'},
  { word: "trash can", answer: "垃圾桶", lessonId:'2-1'},
  { word: "desk", answer: "書桌", lessonId:'2-1'},
  { word: "whiteboard", answer: "白板", lessonId:'2-1'},
  { word: "blackboard", answer: "黑板", lessonId:'2-1'},
  { word: "speaker", answer: "喇叭", lessonId:'2-1'},
  { word: "fan", answer: "電風扇", lessonId:'2-1'},
  { word: "door", answer: "門", lessonId:'2-1'},

  { word: "eleven", answer: "十一", lessonId:'2-2'},
  { word: "twelve", answer: "十二", lessonId:'2-2'},
  { word: "thirteen", answer: "十三", lessonId:'2-2'},
  { word: "fourteen", answer: "十四", lessonId:'2-2'},
  { word: "fifteen", answer: "十五", lessonId:'2-2'},
  { word: "sixteen", answer: "十六", lessonId:'2-2'},
  { word: "seventeen", answer: "十七", lessonId:'2-2'},
  { word: "eighteen", answer: "十八", lessonId:'2-2'},
  { word: "nineteen", answer: "十九", lessonId:'2-2'},
  { word: "twenty", answer: "二十", lessonId:'2-2'},

  { word: "video game", answer: "電玩遊戲", lessonId:'2-3'},
  { word: "blocks", answer: "積木", lessonId:'2-3'},
  { word: "board game", answer: "桌上遊戲", lessonId:'2-3'},
  { word: "toy store", answer: "玩具店", lessonId:'2-3'},
  { word: "ball", answer: "球", lessonId:'2-3'},
  { word: "doll", answer: "洋娃娃", lessonId:'2-3'},
  { word: "robot", answer: "機器人", lessonId:'2-3'},
  { word: "teddy bear", answer: "泰迪熊", lessonId:'2-3'},
  
  { word: "papaya(s)", answer: "木瓜", lessonId:'2-4'},
  { word: "guava(s)", answer: "芭樂", lessonId:'2-4'},
  { word: "pear(s)", answer: "西洋梨", lessonId:'2-4'},
  { word: "banana(s)", answer: "香蕉", lessonId:'2-4'},
  { word: "watermelon(s)", answer: "西瓜", lessonId:'2-4'},
  { word: "melon(s)", answer: "哈蜜瓜", lessonId:'2-4'},
  { word: "lemon(s)", answer: "檸檬", lessonId:'2-4'},
  { word: "grape(s)", answer: "葡萄", lessonId:'2-4'},
  { word: "juice", answer: "果汁", lessonId:'2-4'},

  { word: "orange(s)", answer: "柳丁", lessonId:'2-5'},
  { word: "chreey(ies)", answer: "櫻桃", lessonId:'2-5'},
  { word: "peach(es)", answer: "水蜜桃", lessonId:'2-5'},
  { word: "coconut(s)", answer: "椰子", lessonId:'2-5'},
  { word: "straberry(ies)", answer: "草莓", lessonId:'2-5'},
  { word: "tomato(es)", answer: "番茄", lessonId:'2-5'},
  { word: "kiwi(s)", answer: "奇異果", lessonId:'2-5'},
  { word: "mango(es)", answer: "芒果", lessonId:'2-5'},

  { word: "run", answer: "跑", lessonId:'2-6'},
  { word: "jump", answer: "跳", lessonId:'2-6'},
  { word: "swim", answer: "遊泳", lessonId:'2-6'},
  { word: "read", answer: "閱讀", lessonId:'2-6'},
  { word: "write", answer: "寫", lessonId:'2-6'},
  { word: "dance", answer: "跳舞", lessonId:'2-6'},
  { word: "sing", answer: "唱歌", lessonId:'2-6'},
  { word: "local", answer: "本土的", lessonId:'2-6'},
  { word: "type", answer: "打字", lessonId:'2-6'},

  { word: "dining room", answer: "飯廳", lessonId:'2-7'},
  { word: "basement", answer: "地下室", lessonId:'2-7'},
  { word: "garden", answer: "花園", lessonId:'2-7'},
  { word: "living room", answer: "客廳", lessonId:'2-7'},
  { word: "kitchen", answer: "廚房", lessonId:'2-7'},
  { word: "bedroom", answer: "臥房", lessonId:'2-7'},
  { word: "yard", answer: "院子", lessonId:'2-7'},
  { word: "bathroom", answer: "浴室", lessonId:'2-7'},

  { word: "on", answer: "在...上面", lessonId:'2-8'},
  { word: "in", answer: "在...裡面", lessonId:'2-8'},
  { word: "behind", answer: "在...後面", lessonId:'2-8'},
  { word: "between", answer: "在...中間", lessonId:'2-8'},
  { word: "next to", answer: "在...旁邊", lessonId:'2-8'},
  { word: "under", answer: "在...下面", lessonId:'2-8'},
  { word: "in front of", answer: "在...前面", lessonId:'2-8'},
  { word: "near", answer: "在...附近", lessonId:'2-8'},

  { word: "tiger", answer: "老虎", lessonId:'2-9'},
  { word: "hippo", answer: "河馬", lessonId:'2-9'},
  { word: "monkey", answer: "猴子", lessonId:'2-9'},
  { word: "parrot", answer: "鸚鵡", lessonId:'2-9'},
  { word: "lion", answer: "獅子", lessonId:'2-9'},
  { word: "goat", answer: "山羊", lessonId:'2-9'},
  { word: "zebra", answer: "斑馬", lessonId:'2-9'},
  { word: "elephant", answer: "大象", lessonId:'2-9'},
  { word: "bear", answer: "熊", lessonId:'2-9'},
  { word: "snake", answer: "蛇", lessonId:'2-9'},

    /* Volume-3 */
  { word: "fish", answer: "魚", lessonId:'3-1'},
  { word: "turtle", answer: "烏龜", lessonId:'3-1'},
  { word: "frog", answer: "青蛙", lessonId:'3-1'},
  { word: "spider", answer: "蜘蛛", lessonId:'3-1'},
  { word: "bird", answer: "鳥", lessonId:'3-1'},
  { word: "hamster", answer: "倉鼠", lessonId:'3-1'},
  { word: "bunny", answer: "小兔子", lessonId:'3-1'},
  { word: "puppy", answer: "小狗", lessonId:'3-1'},
  { word: "kitten", answer: "小貓", lessonId:'3-1'},

  { word: "hamburger", answer: "漢堡", lessonId:'3-2'},
  { word: "french fries", answer: "薯條", lessonId:'3-2'},
  { word: "chicken nuggets", answer: "雞塊", lessonId:'3-2'},
  { word: "onion rings", answer: "洋蔥圈", lessonId:'3-2'},
  { word: "fried chicken", answer: "炸雞", lessonId:'3-2'},
  { word: "salad", answer: "沙拉", lessonId:'3-2'},
  { word: "hot dog", answer: "熱狗", lessonId:'3-2'},
  { word: "soda", answer: "蘇打", lessonId:'3-2'},
  { word: "cola", answer: "可樂", lessonId:'3-2'},
  { word: "pizza", answer: "披薩", lessonId:'3-2'},

  { word: "milk", answer: "牛奶", lessonId:'3-3'},
  { word: "bread", answer: "麵包", lessonId:'3-3'},
  { word: "cake", answer: "蛋糕", lessonId:'3-3'},
  { word: "popcorn", answer: "爆米花", lessonId:'3-3'},
  { word: "cookies", answer: "餅乾", lessonId:'3-3'},
  { word: "ice cream", answer: "冰淇淋", lessonId:'3-3'},
  { word: "juice", answer: "果汁", lessonId:'3-3'},
  { word: "potato chips", answer: "薯片", lessonId:'3-3'},
  { word: "tea", answer: "茶", lessonId:'3-3'},
  { word: "coffee", answer: "咖啡", lessonId:'3-3'},

  { word: "skateboard", answer: "滑板", lessonId:'3-4'},
  { word: "action figure", answer: "動作人物", lessonId:'3-4'},
  { word: "puzzle", answer: "猜謎遊戲", lessonId:'3-4'},
  { word: "computer", answer: "電腦", lessonId:'3-4'},
  { word: "kite", answer: "風箏", lessonId:'3-4'},
  { word: "stuffed animal", answer: "毛絨動物", lessonId:'3-4'},
  { word: "jump rope", answer: "跳繩", lessonId:'3-4'},
  { word: "model car", answer: "模型車", lessonId:'3-4'},
  { word: "bicycle", answer: "腳踏車", lessonId:'3-4'},

  { word: "head", answer: "頭", lessonId:'3-5'},
  { word: "ear(s)", answer: "耳朵", lessonId:'3-5'},
  { word: "eye(s)", answer: "眼睛", lessonId:'3-5'},
  { word: "leg(s)", answer: "腿", lessonId:'3-5'},
  { word: "hand(s)", answer: "手掌", lessonId:'3-5'},
  { word: "arm(s)", answer: "手臂", lessonId:'3-5'},
  { word: "tooth (teeth)", answer: "牙齒", lessonId:'3-5'},
  { word: "mouth", answer: "嘴巴", lessonId:'3-5'},
  { word: "nose", answer: "鼻子", lessonId:'3-5'},
  { word: "foot (feet)", answer: "腳掌", lessonId:'3-5'},

  { word: "hair", answer: "頭髮", lessonId:'3-6'},
  { word: "long", answer: "長", lessonId:'3-6'},
  { word: "short", answer: "短", lessonId:'3-6'},
  { word: "curly", answer: "捲曲的", lessonId:'3-6'},
  { word: "straight", answer: "直的", lessonId:'3-6'},
  { word: "braided", answer: "編織的", lessonId:'3-6'},
  { word: "blond", answer: "明亮的", lessonId:'3-6'},
  { word: "dark", answer: "黑暗的", lessonId:'3-6'},

  { word: "basketball", answer: "籃球", lessonId:'3-7'},
  { word: "ping-pong", answer: "乒乓球", lessonId:'3-7'},
  { word: "volleyball", answer: "排球", lessonId:'3-7'},
  { word: "golf", answer: "高爾夫球", lessonId:'3-7'},
  { word: "soccer", answer: "足球", lessonId:'3-7'},
  { word: "badminton", answer: "羽毛球", lessonId:'3-7'},
  { word: "football", answer: "橄欖球", lessonId:'3-7'},
  { word: "dodgeball", answer: "躲避球", lessonId:'3-7'},
  { word: "tennis", answer: "網球", lessonId:'3-7'},
  { word: "baseball", answer: "棒球", lessonId:'3-7'},  

  { word: "fly a kite", answer: "放風箏", lessonId:'3-8'},
  { word: "read a book", answer: "看書", lessonId:'3-8'},
  { word: "listen to music", answer: "聽音樂", lessonId:'3-8'},
  { word: "watch TV", answer: "看電視", lessonId:'3-8'},
  { word: "ride a bike", answer: "騎腳踏車", lessonId:'3-8'},
  { word: "Sunday", answer: "星期日", lessonId:'3-8'},
  { word: "Monday", answer: "星期一", lessonId:'3-8'},
  { word: "Tuesday", answer: "星期二", lessonId:'3-8'},
  { word: "Wednesday", answer: "星期三", lessonId:'3-8'},
  { word: "Thursday", answer: "星期四", lessonId:'3-8'},  
  { word: "Friday", answer: "星期五", lessonId:'3-8'},
  { word: "Saturday", answer: "星期六", lessonId:'3-8'},  

  { word: "sunny", answer: "晴天", lessonId:'3-9'},
  { word: "rainy", answer: "雨天", lessonId:'3-9'},
  { word: "snowy", answer: "雪天", lessonId:'3-9'},
  { word: "windy", answer: "刮風天", lessonId:'3-9'},
  { word: "cloudy", answer: "多雲天", lessonId:'3-9'},
  { word: "go swimming", answer: "去游泳", lessonId:'3-9'},
  { word: "go shopping", answer: "去購物", lessonId:'3-9'},
  { word: "go fishing", answer: "去釣魚", lessonId:'3-9'},
  { word: "go jogging", answer: "去慢跑", lessonId:'3-9'},
  { word: "go hiking", answer: "去爬山", lessonId:'3-9'},  


];

let selectedKid = null;
let selectedCourses = [];
let selectedQuestions = [];
let current = 0;
let score = 0;
let currentMode = 'en-to-zh';

// select person
function selectRole(card, kid){
    selectedKid = kid;
    selectedCourses = [];
    document.getElementById('role-select').classList.add('hidden');
    document.getElementById('course-select').classList.remove('hidden');
    //reselect
    document.querySelectorAll('#course-buttons button').forEach(b=>b.classList.remove('selected'));
}

// multiple select
function toggleCourse(btn){
    const id = btn.dataset.lessonid;  // ⭐ 改這裡！用字串
    const index = selectedCourses.indexOf(id);

    if(index > -1){
        selectedCourses.splice(index,1);
        btn.classList.remove("selected");
    } else {
        selectedCourses.push(id);
        btn.classList.add("selected");
    }
}

// select all 
function toggleSelectAllCourses() {
    const allButtons = document.querySelectorAll(".course-btn");
    const allSelected = Array.from(allButtons).every(btn => btn.classList.contains("selected"));

    if (allSelected) {
        allButtons.forEach(btn => btn.classList.remove("selected"));
        selectedCourses = [];
    } else {
        allButtons.forEach(btn => btn.classList.add("selected"));
        selectedCourses = Array.from(allButtons).map(btn => btn.dataset.lessonid); // ⭐ 改這裡
    }
}





// confirm select
function confirmCourses(){
    if(selectedCourses.length===0){ alert("請至少選一個課程"); return; }
    document.getElementById('course-select').classList.add('hidden');
    document.getElementById('start-buttons').classList.remove('hidden');
}

// random
function shuffle(array){ return array.sort(()=>Math.random()-0.5); }

// start test
function startGame(count, mode){
    if(!selectedKid){ alert("請先選小孩"); return; }
    if(selectedCourses.length===0){ alert("請先選課程"); return; }

    currentMode = mode;
    current = 0;
    score = 0;

    const filteredQuestions = quizData.filter(q=> selectedCourses.includes(q.lessonId));
    selectedQuestions = shuffle(filteredQuestions).slice(0,count);

    document.getElementById('start-buttons').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    showQuestion();
}

// show question
function showQuestion(){
    const data = selectedQuestions[current];
    const word = currentMode==='en-to-zh'?data.word:data.answer;
    const correct = currentMode==='en-to-zh'?data.answer:data.word;
    document.getElementById('word').textContent=word;

    if(currentMode==='en-to-zh'){
        const utterance=new SpeechSynthesisUtterance(data.word);
        utterance.lang='en-US';
        speechSynthesis.speak(utterance);
    }

    const optionsContainer=document.getElementById('options');
    optionsContainer.innerHTML='';

    const allChoices = quizData.map(q=>currentMode==='en-to-zh'?q.answer:q.word)
        .filter(ans=>ans!==correct);
    const wrongChoices = shuffle(allChoices).slice(0,3);
    const finalChoices = shuffle([correct,...wrongChoices]);

    finalChoices.forEach(choice=>{
        const btn=document.createElement('div');
        btn.className='option';
        btn.textContent=choice;
        btn.onclick=()=>checkAnswer(btn,choice,correct);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('next-btn').style.display='none';
    document.getElementById('score-box').textContent=`第 ${current+1} 題 / 共 ${selectedQuestions.length} 題`;
}

// check answer
function checkAnswer(button, choice, correct){
    const options=document.querySelectorAll('.option');
    options.forEach(opt=>{
        opt.onclick=null;
        if(opt.textContent===correct) opt.classList.add('correct');
        else if(opt.textContent===choice) opt.classList.add('wrong');
    });
    if(choice===correct) score++;
    document.getElementById('next-btn').style.display='inline-block';
}

// next question
function nextQuestion(){
    current++;
    if(current<selectedQuestions.length) showQuestion();
    else showScore();
}

// show score
function showScore(){
    document.getElementById('quiz-box').innerHTML=`
        <h2>${selectedKid} 測驗完成！</h2>
        <h3>得分(成績/題數)：${score} / ${selectedQuestions.length}</h3>
        <button class="restart-button" onclick="location.reload()">再玩一次？</button>
    `;
}

function goBack(){
    window.location.href="https://ChiaYunn.github.io/front_page.html";
}
