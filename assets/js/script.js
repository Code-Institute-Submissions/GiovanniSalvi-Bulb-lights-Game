//let image = document.querySelector(".bulb-off")

//image.addEventListener('click', function(){
//changeImage()

//});

//function changeImage(){
//image.src = ""
//};
let computerSequence = [];
let userSequence = [];
let level = 0;

const startButton = document.getElementById("startButton");
const sequenceLevel = document.querySelector(".waitmode");
const bulbContainer = document.getElementById("handleclick");
const levelsCounter = document.querySelector(".counter");
const endGame = document.querySelector(".success");
const gameLost = document.querySelector(".lost");

function startGame() {
    startButton.classList.add('hidden');
    sequenceLevel.classList.remove('hidden');
    levelsCounter.classList.remove('counter');
    gameLost.classList.add('hidden');
    nextTurn();
}

  //startButton.addEventListener('click', startGame);
  //console.log('bulbContainer: ' + bulbContainer);
  //bulbContainer.forEach(item => {
     //item.addEventListener('click', event => {
        //const { bulb } = event.target.dataset;
        //console.log('event: ' + event.target.dataset);
        //if (bulb) manageTap(bulb);
        //console.log('bulb :' + bulb);
        //});
    //});
  startButton.addEventListener('click', startGame);
  console.log('bulbContainer :' + bulbContainer);
  bulbContainer.addEventListener('click', event => {
      var bulb = event.target.dataset;
      console.log('event: ' + event +  ' dataset: ' + event.target.dataset); 
      if (bulb) manageTap(bulb);
      console.log('bulb :' + bulb);
  });


function nextTurn() {
    level += 1;
    bulbContainer.classList.add('unclickable');
    //bulbContainer.forEach(item => {
    //item.classList.add('unclickable')
      //})
    levelsCounter.textContent = `Level ${level} of 10`;


    var nextSerie = [...computerSequence];
    nextSerie.push(chooseRandomBulb());
    switchLight(nextSerie);

    computerSequence = [...nextSerie];
    var timeoutInstance = setTimeout(() => {
        userTurn(level);
        clearTimeout(timeoutInstance);
    }, level * 600 + 1000);
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
        }, (index + 1) * 700);
    });
}

function activateBulb(number) {
    var bulb = document.querySelector(`[data-lightbox='${number}']`);

    bulb.classList.remove('bulb-off');
    var timeoutInstance = setTimeout(() => {
        bulb.classList.add('hidden');
        clearTimeout(timeoutInstance);
    }, 200);
}

function userTurn(level) {
    bulbContainer.classList.remove('unclickable');
    
    sequenceLevel.textContent = `Your turn: ${level} Tap`;
    console.log('user turn level :' + level)
}

function manageTap(bulb) {
    var index = userSequence.push(bulb) - 1;
    var remainingTaps = computerSequence.length - userSequence.length;
    
    console.log('remaining tap: ' + bulb)
    if (userSequence[index] !== computerSequence[index]) {
        sequenceLevel.classList.add('hidden');
        gameLost.classList.remove('hidden');
        levelsCounter.classList.add('counter')
        resetGame();
        return;
    }

    if (userSequence.length === computerSequence.length) {
        if (userSequence.length === 10) {
            levelsCounter.classList,add('counter')
            sequenceLevel.classList.add('hidden');
            endGame.classList.remove('hidden')
            resetGame();
            return
        }

        userSequence = [];
        sequenceLevel.textContent = 'Well Done!';
        var timeoutInstance = setTimeout(() => {
            nextTurn();
            clearTimeout(timeoutInstance);
        }, 1000);
        return;
        //console.log('Well done :' + userSequence);
    }

    sequenceLevel.textContent = `Your turn: ${remainingTaps} Tap${
remainingTaps
}`;
}

        function resetGame() {
            computerSequence = [];
            userSequence = [];
            level = 0;
            startButton.classList.remove('hidden');
            levelsCounter.classList.add('counter');
            endGame.classList.add('hidden')
            bulbContainer.classList.add('unclickable');
        }

