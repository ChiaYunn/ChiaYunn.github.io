// example
const quizData = [
  {word:'apple', answer:'蘋果', lesson:1},
  {word:'banana', answer:'香蕉', lesson:1},
  {word:'cat', answer:'貓', lesson:2},
  {word:'dog', answer:'狗', lesson:2},
  {word:'egg', answer:'蛋', lesson:3},
  {word:'fish', answer:'魚', lesson:3},
  {word:'grape', answer:'葡萄', lesson:4},
  {word:'hat', answer:'帽子', lesson:4},
  {word:'ice', answer:'冰', lesson:5},
  {word:'juice', answer:'果汁', lesson:5},
  {word:'kite', answer:'風箏', lesson:6},
  {word:'lion', answer:'獅子', lesson:6},
  {word:'moon', answer:'月亮', lesson:7},
  {word:'nest', answer:'鳥巢', lesson:7},
  {word:'orange', answer:'橘子', lesson:8},
  {word:'pig', answer:'豬', lesson:8},
  {word:'queen', answer:'女王', lesson:9},
  {word:'rain', answer:'雨', lesson:9}
  
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
function toggleCourse(btn, lessonId){
    const id = Number(btn.dataset.lesson); 
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
        selectedCourses = Array.from(allButtons).map(btn => Number(btn.dataset.lesson));
    }
}

const filteredQuestions = quizData.filter(q => selectedCourses.includes(q.lesson));



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

    const filteredQuestions = quizData.filter(q=> selectedCourses.includes(q.lesson));
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
    window.location.href="front_page.html";
}
