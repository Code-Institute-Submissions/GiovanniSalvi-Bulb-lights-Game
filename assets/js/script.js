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
      const bulb
          = event.target.dataset;
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


    const nextSerie = [...computerSequence];
    nextSerie.push(chooseRandomBulb());
    switchLight(nextSerie);

    computerSequence = [...nextSerie];
    const timeoutInstance = setTimeout(() => {
        userTurn(level);
        clearTimeout(timeoutInstance);
    }, level * 800 + 1000);
}

function chooseRandomBulb() {
    const bulbs = ['one', 'two', 'three', 'four', 'five', 'six'];
    const random = bulbs[Math.floor(Math.random() * bulbs.length)];
    return random;
}

function switchLight(nextSerie) {
    nextSerie.forEach((number, index) => {
        var timeoutInstance = setTimeout(() => {
            activateBulb(number);
            clearTimeout(timeoutInstance);
        }, (index + 1) * 600);
    });
}

function activateBulb(number) {
    const bulb = document.querySelector(`[data-lightbox='${number}']`);
    //const audio = document.querySelector(`[data-sound='${number}']`);
    //sound.play();

    bulb.classList.remove('bulb-off');
    const timeoutInstance = setTimeout(() => {
        bulb.classList.add('hidden');
        clearTimeout(timeoutInstance);
    }, 400);
}

function userTurn(level) {
      bulbContainer.classList.remove('unclickable');
    //bulbContainer.forEach(item => {
    //item.classList.remove('unclickable')
      //})
    sequenceLevel.textContent = `Your turn: ${level} Tap`;
    console.log('user turn level :' + level)
}

function manageTap(bulb) {
    const index = userSequence.push(bulb) - 1;

    const remainingTaps = computerSequence.length - userSequence.length;
    ///const audio = document.querySelector(`[data-sound='${bulb}']`);
    ///sound.play();
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

        function resetGame() {
            computerSequence = [];
            userSequence = [];
            level = 0;
            startButton.classList.remove('hidden');
            levelsCounter.classList.add('counter');
            //endGame.classList.remove('hidden')
            bulbContainer.classList.add('unclickable');
        }

        userSequence = [];
        sequenceLevel.textContent = 'Well Done!';
        var timeoutInstance = setTimeout(() => {
            nextTurn();
            clearTimeout(timeoutInstance);
        }, 1000);
        return;
    }

    sequenceLevel.textContent = `Your turn: ${remainingTaps} Tap${
remainingTaps
}`;
}

