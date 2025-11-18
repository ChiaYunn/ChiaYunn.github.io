let currentKid = null;

function createSparkles() {
    const area = document.getElementById("sparkle-area");
    area.innerHTML = "";
    const emojis = ["✨","🌟","💖","⭐","🍭","🎀","🌸","💫","🌈","💕","🌙"];
    for (let i = 0; i < 6; i++) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.left = (Math.random() * 80 + 10) + "%";
        s.style.top = (Math.random() * 120 - 40) + "%";
        s.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        area.appendChild(s);
    }
}
createSparkles();

// select person
function selectKid(name, btn){
    currentKid = name;
    document.getElementById("lottery-section").style.display = "block";

    // botton 
    const buttons = document.querySelectorAll("#kid-buttons .btn");
    buttons.forEach(b=>{
        if(b!==btn) b.style.display="none";
        else { b.style.transform="scale(1.5)"; }
    });

    // Clear previous lottery results & textarea
    document.getElementById("lotteryInput").value="";
    document.getElementById("result").textContent="等待抽籤中～";
    document.getElementById("result").classList.remove("result-show");
}

// back to celect person
function backToSelect(){
    currentKid=null;
    document.getElementById("lottery-section").style.display="none";

    const buttons = document.querySelectorAll("#kid-buttons .btn");
    buttons.forEach(b=>{
        b.style.display="inline-block";
        b.style.transform="scale(1)";
    });

    document.getElementById("lotteryInput").value="";
    document.getElementById("result").textContent="等待抽籤中～";
    document.getElementById("result").classList.remove("result-show");
}

// WebAudio 播放 Poing
function playPoing() {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const o = context.createOscillator();
    const g = context.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(600, context.currentTime);
    o.frequency.exponentialRampToValueAtTime(900, context.currentTime + 0.1);
    g.gain.setValueAtTime(0.2, context.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.2);
    o.connect(g);
    g.connect(context.destination);
    o.start();
    o.stop(context.currentTime + 0.2);
}

function draw() {
    if(!currentKid){ alert("你誰！？"); return; }

    playPoing();
    createSparkles();

    const input = document.getElementById("lotteryInput").value.trim();
    const resultBox = document.getElementById("result");
    const card = document.getElementById("card-area");

    if (!input) {
        resultBox.textContent = "要記得輸入籤文喔～🐰";
        resultBox.classList.add("result-show");
        return;
    }

    const list = input.split("\n").map(s => s.trim()).filter(s => s);
    if (list.length === 0) {
        resultBox.textContent = "籤文格式怪怪的，再試一次 🐰";
        resultBox.classList.add("result-show");
        return;
    }

    card.classList.add("shake");

    setTimeout(() => {
        card.classList.remove("shake");
        const pick = list[Math.floor(Math.random() * list.length)];
        resultBox.textContent = pick;
        resultBox.classList.add("result-show");

        saveStat(currentKid, pick);
        renderStats();
        createSparkles();
    }, 600);
}

// Save statistics
function saveStat(kid, work){
    let stats=JSON.parse(localStorage.getItem("lotteryStats")||"{}");
    if(!stats[kid]) stats[kid]=[];
    stats[kid].push(work);
    localStorage.setItem("lotteryStats", JSON.stringify(stats));
}

// Rendering statistics
function renderStats(){
    let stats=JSON.parse(localStorage.getItem("lotteryStats")||"{}");
    const container=document.getElementById("stat-list");
    if(Object.keys(stats).length===0){
        container.textContent="尚未抽過籤～";
        return;
    }
    let html="";
    for(let kid in stats){
        html+=`<b>${kid}：</b><ul>${stats[kid].map(w=>`<li>${w}</li>`).join("")}</ul>`;
    }
    container.innerHTML=html;
}

// clear
function clearStats(){
    if(confirm("確定要清除統計嗎？")){
        localStorage.removeItem("lotteryStats");
        renderStats();
        backToSelect();
    }
}

// initialization
renderStats();
createSparkles();


function goBack(){
    window.location.href="front_page.html";
}