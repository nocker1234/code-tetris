const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');
const levelDisplay = document.getElementById('level-display');
const codeInput = document.getElementById('code-input');

canvas.width = 300;
canvas.height = 600;

let level = 0;
let gameSpeed = 1000;
let pieceColor = '#00f';
let gameInterval;

// Function to start the game
function startGame() {
    level = 0;
    gameSpeed = 1000;
    pieceColor = '#00f';
    updateLevelDisplay();
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, gameSpeed);
}

// Function to update the level display
function updateLevelDisplay() {
    levelDisplay.innerText = `Level: ${level}`;
}

// Function to apply code changes
function applyCode() {
    try {
        eval(codeInput.value);
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, gameSpeed);
    } catch (e) {
        alert('Error in code: ' + e.message);
    }
}

// Main game loop
function gameLoop() {
    // Game logic and rendering
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = pieceColor;
    ctx.fillRect(100, 100, 50, 50); // Placeholder for game piece

    // Increase level and speed
    level++;
    if (level < 100) {
        gameSpeed -= 10;
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, gameSpeed);
    }
    updateLevelDisplay();
}

startGame();
