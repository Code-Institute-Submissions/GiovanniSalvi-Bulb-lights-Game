//let image = document.querySelector(".bulb-off")
    
    //image.addEventListener('click', function(){
        //changeImage()
        
    //});

    //function changeImage(){
        //image.src = ""
//};
let computerSerie = [];
let userSerie = [];
let level = 0;

const startButton = document.getElementById("startButton");
const sequenceLevel = document.querySelector(".waitMode");  
const sectionContainer = document.querySelector(".container");
const levelsCounter = document.querySelector(".counter");
const endGame = document.querySelector(".success");
const gameLost = document.querySelector(".lost");

function startGame() {
      startButton.classList.add('hidden');
      sequenceLevel.classList.remove('hidden');
      levelsCounter.classList.remove('counter');
      nextTurn();
}

startButton.addEventListener('click', startGame);
sectionContainer.addEventListener('click', event => {
  const { bulb } = event.target.dataset;

  if (bulb) manageTap(bulb);
});


function nextTurn() {
   level += 1;
   sectionContainer.classList.add('unclickable');
   levelsCounter.textContent = `Level ${level} of 10`;
   
    const nextSerie = [...computerSerie];
     nextSerie.push(chooseBulb());
     
     switchLight(nextSerie);
     
     computerSerie = [...nextSerie];
     setTimeout(() => {
     userTurn(level);
    }, level * 500 + 1000);
}

function chooseBulb(){
    const  bulbs = ['one', 'two', 'three', 'four', 'five', 'six' ];
    const  random = bulbs[Math.floor(Math.random() * bulbs.length)];
    return random;
}

function switchLight(nextSerie) {
    nextSerie.forEach((number, index) => {
      setTimeout(() => {
    
      activateBulb(number);
    }, (index + 1) * 600);
  });
}

function activateBulb(number) {
    const bulb = document.querySelector(`[data-key='${number}']`);
    
    bulb.classList.remove('bulb-off');
    setTimeout(() => {
        bulb.classList.add('hidden');
        
    }, 400);
}

function userTurn(level) {
  sectionContainer.classList.remove('unclickable');
  sequenceLevel.textContent = `Your turn: ${level} Tap`;
}


function manageTap(bulb) {
  const index = userSerie.push(bulb) - 1;
  const remainingTaps = computerSerie.length - userSerie.length;
  const sound = document.querySelector(`[data-sound='${bulb}']`);
  sound.play();

  if (userSerie[index] !== computerSerie[index]) {
    gameLost.classList.remove('hidden');
    resetGame(text);
    return ;
  }

  if (userSerie.length === computerSerie.length) {
    if (userSerie.length === 20) {
      endGame.classList.remove('hidden')
      resetGame(text);
      return
    }

function resetGame() {
  computerSerie = [];
  userSerie = [];
  level = 0;
  startButton.classList.remove('hidden');
  levelsCounter.classList.add('counter');
  endGame.classList.remove('hidden')
  sectionContainer.classList.add('unclickable');
}

    userserie = [];
    sequencelevel.textContent = 'Well Done!';
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }

  sequenceLevel.textContent = `Your turn: ${remainingTaps} Tap${
      remainingTaps 
    }`;
}




