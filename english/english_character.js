const quizData = [
  { word: "dog", answer: "狗" },
  { word: "cat", answer: "貓" },
  { word: "horse", answer: "馬" },
  { word: "girl", answer: "女孩" },
  { word: "boy", answer: "男孩" },
  { word: "man", answer: "男人" },
  { word: "woman", answer: "女人" },
  { word: "student", answer: "學生" },
  { word: "teacher", answer: "老師" },
  { word: "me", answer: "我" },
  { word: "mother", answer: "媽媽" },
  { word: "father", answer: "爸爸" },
  { word: "grandmother", answer: "外婆 / 祖母" },
  { word: "grandfather", answer: "外公 / 祖父" },
  { word: "uncle", answer: "叔叔 / 舅舅" },
  { word: "aunt", answer: "阿姨 / 姑姑" },
  { word: "cousin(s)", answer: "堂/表兄弟姊妹" },
  { word: "brother", answer: "兄弟" },
  { word: "sister", answer: "姊妹" },
  { word: "pen", answer: "筆" },
  { word: "pencil case", answer: "鉛筆盒" },
  { word: "school bag", answer: "書包" },
  { word: "eraser", answer: "橡皮擦" },
  { word: "table", answer: "桌子" },
  { word: "chair", answer: "椅子" },
  { word: "book", answer: "書" },
  { word: "one", answer: "一" },
  { word: "two", answer: "二" },
  { word: "three", answer: "三" },
  { word: "four", answer: "四" },
  { word: "five", answer: "五" },
  { word: "six", answer: "六" },
  { word: "seven", answer: "七" },
  { word: "eight", answer: "八" },
  { word: "nine", answer: "九" },
  { word: "ten", answer: "十" },
  { word: "sad", answer: "難過的" },
  { word: "happy", answer: "快樂的" },
  { word: "young", answer: "年輕的" },
  { word: "old", answer: "年老的" },
  { word: "chubby", answer: "圓胖的" },
  { word: "thin", answer: "瘦的" },
  { word: "short", answer: "矮的" },
  { word: "tall", answer: "高的" },
  { word: "cute", answer: "可愛的" },
  { word: "number", answer: "數字" },
  { word: "year", answer: "年" },
  { word: "color", answer: "顏色" },
  { word: "red", answer: "紅色" },
  { word: "yellow", answer: "黃色" },
  { word: "blue", answer: "藍色" },
  { word: "pink", answer: "粉紅色" },
  { word: "purple", answer: "紫色" },
  { word: "white", answer: "白色" },
  { word: "black", answer: "黑色" },
  { word: "brown", answer: "咖啡色" },
  { word: "green", answer: "綠色" },
  { word: "orange", answer: "橘色" },
  { word: "hungry", answer: "餓的" },
  { word: "angry", answer: "生氣的" },
  { word: "quiet", answer: "安靜的" },
  { word: "sleepy", answer: "愛睏的" },
  { word: "thirsty", answer: "口渴的" },
  { word: "noisy", answer: "吵鬧的" },
  { word: "lazy", answer: "懶惰的" },
  { word: "tired", answer: "累的" },
  { word: "zero", answer: "零" },
  { word: "dress", answer: "洋裝" },
  { word: "T-shirt", answer: "T恤" },
  { word: "skirt", answer: "裙子" },
  { word: "coat", answer: "大衣" },
  { word: "jacket", answer: "外套" },
  { word: "hat", answer: "帽子" },
  { word: "stationery", answer: "文具" },
  { word: "duck", answer: "鴨子" },
  { word: "pig", answer: "豬" },
  { word: "rabbit", answer: "兔子" },
  { word: "cow", answer: "牛" },
  { word: "chicken", answer: "雞" },
  { word: "sheep", answer: "綿羊" },
  { word: "rat", answer: "老鼠" },
  { word: "classroom", answer: "教室" },
  { word: "window", answer: "窗戶" },
  { word: "trash can", answer: "垃圾桶" },
  { word: "desk", answer: "書桌" },
  { word: "whiteboard", answer: "白板" },
  { word: "blackboard", answer: "黑板" },
  { word: "speaker", answer: "喇叭" },
  { word: "fan", answer: "電風扇" },
  { word: "door", answer: "門" },
  { word: "eleven", answer: "十一" },
  { word: "twelve", answer: "十二" },
  { word: "thirteen", answer: "十三" },
  { word: "fourteen", answer: "十四" },
  { word: "fifteen", answer: "十五" },
  { word: "sixteen", answer: "十六" },
  { word: "seventeen", answer: "十七" },
  { word: "eighteen", answer: "十八" },
  { word: "nineteen", answer: "十九" },
  { word: "twenty", answer: "二十" },
  { word: "video game", answer: "電玩遊戲" },
  { word: "blocks", answer: "積木" },
  { word: "board game", answer: "桌上遊戲" },
  { word: "toy store", answer: "玩具店" },
  { word: "ball", answer: "球" },
  { word: "doll", answer: "洋娃娃" },
  { word: "robot", answer: "機器人" },
  { word: "teddy bear", answer: "泰迪熊" },
  { word: "papaya(s)", answer: "木瓜" },
  { word: "guava(s)", answer: "芭樂" },
  { word: "pear(s)", answer: "西洋梨" },
  { word: "banana(s)", answer: "香蕉" },
  { word: "watermelon(s)", answer: "西瓜" },
  { word: "melon(s)", answer: "哈蜜瓜" },
  { word: "lemon(s)", answer: "檸檬" },
  { word: "grape(s)", answer: "葡萄" },
  { word: "orange(s)", answer: "柳丁" },
  { word: "chreey(ies)", answer: "櫻桃" },
  { word: "peach(es)", answer: "水蜜桃" },
  { word: "coconut(s)", answer: "椰子" },
  { word: "straberry(ies)", answer: "草莓" },
  { word: "tomato(es)", answer: "番茄" },
  { word: "kiwi(s)", answer: "奇異果" },
  { word: "mango(es)", answer: "芒果" },
];


    let selectedQuestions = [];
    let current = 0;
    let score = 0;
    let currentMode = "en-to-zh"; // 預設為英翻中

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function startGame(count, mode = "en-to-zh") {
    currentMode = mode;
    current = 0;
    score = 0;
    selectedQuestions = shuffle(quizData).slice(0, count);
    document.getElementById("start-buttons").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    showQuestion();
    }

    function showQuestion() {
    const data = selectedQuestions[current];
    const word = currentMode === "en-to-zh" ? data.word : data.answer;
    const correct = currentMode === "en-to-zh" ? data.answer : data.word;

    document.getElementById("word").textContent = word;

    // 語音：只有在英翻中才唸英文
    if (currentMode === "en-to-zh") {
        const utterance = new SpeechSynthesisUtterance(data.word);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    }

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    const allChoices = quizData.map(q =>
        currentMode === "en-to-zh" ? q.answer : q.word
    ).filter(ans => ans !== correct);

    const wrongChoices = shuffle(allChoices).slice(0, 3);
    const finalChoices = shuffle([correct, ...wrongChoices]);

    finalChoices.forEach(choice => {
        const btn = document.createElement("div");
        btn.className = "option";
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(btn, choice, correct);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score-box").textContent = `第 ${current + 1} 題 / 共 ${selectedQuestions.length}題`;
    }



    function checkAnswer(button, choice, correct) {
      const options = document.querySelectorAll(".option");
      options.forEach(opt => {
        opt.onclick = null;
        if (opt.textContent === correct) {
          opt.classList.add("correct");
        } else if (opt.textContent === choice) {
          opt.classList.add("wrong");
        }
      });
      if (choice === correct) score++;
      document.getElementById("next-btn").style.display = "inline-block";
    }

    function nextQuestion() {
      current++;
      if (current < selectedQuestions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }

    function showScore() {
      document.getElementById("quiz-box").innerHTML = `
        <h2>測驗完成！</h2>
        <h3>你的得分是：${score} / ${selectedQuestions.length}</p>
        <button class="restart-button" onclick="location.reload()">再玩一次？</button>
      `;
    }

    function goBack() {
      window.location.href = "https://ChiaYunn.github.io/front_page.html";
    }

