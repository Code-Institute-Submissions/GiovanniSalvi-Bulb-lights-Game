let computerSequence = [];
let userSequence = [];
let level = 0;

const startButton = document.getElementById("startButton");
const sequenceLevel = document.querySelector(".waitmode");
const bulbContainer = document.getElementById("handleclick");
const levelsCounter = document.querySelector(".counter");
const endGame = document.querySelector(".success");
const gameLost = document.querySelector(".lost");
const audioClick = document.getElementById("audio");
const lostSound = document.getElementById("lost");
const waitSound = document.getElementById("waitmode");
const successSound = document.getElementById("success");

//global variabiles called//

function startGame() {
    startButton.classList.add('hyde');
    sequenceLevel.classList.remove('hyde');
    levelsCounter.classList.remove('counter');
    gameLost.classList.add('hyde');
    sequenceLevel.style.color = "black";
    nextTurn();
}


startButton.addEventListener('click', startGame);
bulbContainer.addEventListener('click', event => {
    var bulb = event.target.dataset.number;

    if (bulb) manageTap(bulb);

});


function nextTurn() {
    level += 1;
    bulbContainer.classList.add('unclickable');
    var timeoutWait = setTimeout(() => {
        sequenceLevel.textContent = "Wait for the Computer. ."
    }, 500);
    levelsCounter.textContent = `Level ${level} of 10`;


    var nextSerie = [...computerSequence];
    nextSerie.push(chooseRandomBulb());
    switchLight(nextSerie);

    computerSequence = [...nextSerie];
    var timeoutInstance = setTimeout(() => {
        userTurn(level);
        clearTimeout(timeoutInstance);
    }, level * 500 + 800);
}

function chooseRandomBulb() {
    var bulbs = ['one', 'two', 'three', 'four', 'five', 'six'];
    var random = bulbs[Math.floor(Math.random() * bulbs.length)];
    return random;
}

function switchLight(nextSerie) {
    nextSerie.forEach((number, index) => {
        var timeoutInstance = setTimeout(() => {
            activateBulb(number);
            clearTimeout(timeoutInstance);
        }, (index + 1) * 500);
    });
}

function activateBulb(number) {
    var bulb = document.querySelector(`[data-number='${number}']`);
    audioClick.play()
    bulb.classList.add('hyde')
    var timeoutInstance = setTimeout(() => {
        bulb.classList.remove('hyde');
        clearTimeout(timeoutInstance);
    }, 600);
}

function userTurn(level) {
    bulbContainer.classList.remove('unclickable');
    sequenceLevel.textContent = `Your turn:  Tap ${level}`;

}

function manageTap(bulb) {
    var index = userSequence.push(bulb) - 1;
    var remainingTaps = computerSequence.length - userSequence.length;


    if (userSequence[index] !== computerSequence[index]) {
        sequenceLevel.classList.add('hyde');
        levelsCounter.classList.add('counter');
        var timeoutInstance = setTimeout(() => {
            gameLost.classList.remove('hyde');
            lostSound.play();
            clearTimeout(timeoutInstance);
        }, 300);
        var timeoutLostgame = setTimeout(() => {
            gameLost.classList.add('hyde');
            clearTimeout(timeoutLostgame);
        }, 5000);
        resetGame();
        return;
    }

    if (userSequence.length === computerSequence.length) {
        if (userSequence.length === 15) {
            levelsCounter.classList.add('counter')
            sequenceLevel.classList.add('hyde');
            var timeoutSuccess = setTimeout(() => {
                endGame.classList.remove('hyde')
                successSound.play();
                clearTimeout(timeoutSuccess);
            }, 300);
            var timeoutendGame = setTimeout(() => {
                endGame.classList.add('hyde')
                clearTimeout(timeoutendGame);
            }, 5000);
            resetGame();
            return;
        }

        userSequence = [];
        var timeoutSequence = setTimeout(() => {
            sequenceLevel.textContent = 'Well Done!';
            waitSound.play();
        }, 50)
        clearTimeout((timeoutSequence) =>
            700);
        $(document).ready(function() {
            $().css({
                "color": "yellow",
                "font-size": "100%"
            });
        });
        nextTurn();
        return;
    }

    sequenceLevel.textContent = `Your turn: Tap${
remainingTaps
}`;
}

function resetGame() {
    computerSequence = [];
    userSequence = [];
    level = 0;
    var timeoutLostgame = setTimeout(() => {
        startButton.classList.remove('hyde');
        clearTimeout(timeoutLostgame);
    }, 5000);
    levelsCounter.classList.add('counter');
    bulbContainer.classList.add('unclickable');
    sequenceLevel.textContent = ""

}

function play(number) {
    var audio = document.getElementById("audio");
    audio.play();
    activateBulb(number);
}