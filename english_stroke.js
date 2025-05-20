let currentLetter = 'A';
let strokes = [];
let isDrawing = false;
let lastPos = null;
let mistakeCount = 0;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const letterData = {
    A: [
    { type: 'line', from: [100, 250], to: [150, 50] },
    { type: 'line', from: [150, 50], to: [200, 250] },
    { type: 'line', from: [125, 150], to: [175, 150] },
    ],
    
};

function initCounter() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('counterDate');
    if (savedDate !== today) {
    localStorage.setItem('correctCount', '0');
    localStorage.setItem('counterDate', today);
    }
    updateCounterDisplay();
}

function incrementCounter() {
    let count = parseInt(localStorage.getItem('correctCount') || '0', 10);
    count += 1;
    localStorage.setItem('correctCount', count.toString());
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const count = localStorage.getItem('correctCount') || '0';
    document.getElementById('counter').innerText = `✔️ Today Correct: ${count}`;
}

function getMousePos(evt) {
    const rect = canvas.getBoundingClientRect();
    return [evt.clientX - rect.left, evt.clientY - rect.top];
}

function angleBetween(a, b) {
    return Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
}

function angleDiff(a1, a2) {
    let diff = Math.abs(a1 - a2) % 360;
    return diff > 180 ? 360 - diff : diff;
}

function onStrokeComplete(stroke) {
    const expected = letterData[currentLetter][strokes.length - 1];

    const drawnAngle = angleBetween(stroke.from, stroke.to);
    const expectedAngle = angleBetween(expected.from, expected.to);

    const angleTolerance = 25; // 更寬鬆的筆劃方向容差

    if (angleDiff(drawnAngle, expectedAngle) <= angleTolerance) {
    if (strokes.length === letterData[currentLetter].length) {
        document.getElementById('message').innerText = 'Correct! Great job!';
        incrementCounter();
    } else {
        document.getElementById('message').innerText = '';
    }
    } else {
    mistakeCount++;
    if (mistakeCount === 2) {
        document.getElementById('message').innerText = 'One more mistake and you will restart.';
    } else if (mistakeCount >= 3) {
        document.getElementById('message').innerText = 'Too many mistakes. Restarting letter.';
        setTimeout(() => {
        resetCanvas();
        startQuiz();
        }, 800);
    } else {
        document.getElementById('message').innerText = 'Incorrect stroke direction. Try again!';
    }
    }
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokes = [];
    mistakeCount = 0;
    lastPos = null;
}

canvas.addEventListener('pointerdown', (e) => {
    isDrawing = true;
    lastPos = getMousePos(e);
});

canvas.addEventListener('pointermove', (e) => {
    if (!isDrawing) return;
    const pos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(...lastPos);
    ctx.lineTo(...pos);
    ctx.stroke();
    lastPos = pos;
});

canvas.addEventListener('pointerup', (e) => {
    if (!isDrawing) return;
    isDrawing = false;
    const newPos = getMousePos(e);
    strokes.push({ from: lastPos, to: newPos });
    onStrokeComplete(strokes[strokes.length - 1]);
});

function loadRandomLetter() {
    resetCanvas();
    const letters = Object.keys(letterData);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    currentLetter = randomLetter;
    document.getElementById('question').innerText = `Please write: ${currentLetter}`;
}

function startQuiz() {
    resetCanvas();
    document.getElementById('question').innerText = `Please write: ${currentLetter}`;
}

window.onload = () => {
    initCounter();
    startQuiz();
};