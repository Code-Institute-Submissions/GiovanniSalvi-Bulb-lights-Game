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
const bulbContainer = document.querySelector(".lightbox");
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
//bulbContainer.forEach(item => {
  //item.addEventListener('click', event => {
    //const { bulb } = event.target.dataset;

    //if (bulb) manageTap(bulb);
 //})
//});
   startButton.addEventListener('click', startGame);
   bulbContainer.addEventListener('click', event => {
       const { bulb } = event.target.dataset;

  if (bulb) manageTap(bulb);
});


function nextTurn() {
   level += 1;
   bulbContainer.classList.add('unclickable');
   levelsCounter.textContent = `Level ${level} of 10`;


   const nextSerie = [...computerSequence];
   nextSerie.push(chooseRandomBulb());
   switchLight(nextSerie);

   computerSequence = [...nextSerie];
   var timeoutInstance = setTimeout(() => {
    userTurn(level);
    clearTimeout(timeoutInstance);
},  level * 500 + 1000);
}

function chooseRandomBulb(){
   const bulbs = ['one', 'two', 'three', 'four', 'five', 'six' ];
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
   const bulb = document.querySelector(`[data-key='${number}']`);
   //const sound = document.querySelector(`[data-sound='${number}']`);
   //sound.play();
   bulb.classList.remove('bulb-off');
   var timeoutInstance = setTimeout(() => {
     bulb.classList.add('hidden');
     clearTimeout(timeoutInstance);
},  400);
}

function userTurn(level) {
   bulbContainer.classList.remove('unclickable');
   sequenceLevel.textContent = `Your turn: ${level} Tap`;
}

function manageTap(bulb) {
   const index = userSequence.push(bulb) - 1;

   const remainingTaps = computerSequence.length - userSequence.length;
   //const sound = document.querySelector(`[data-sound='${bulb}']`);
   //sound.play();

if (userSequence[index] !== computerSequence[index]) {
   gameLost.classList.remove('hidden');
   resetGame(text);
   return ;
}

if (userSequence.length === computerSequence.length) {
  if (userSequence.length === 10) {
    endGame.classList.remove('hidden')
    resetGame(text);
    return
}

function resetGame() {
   computerSequence = [];
   userSequence = [];
   level = 0;
   startButton.classList.remove('hidden');
   levelsCounter.classList.add('counter');
   endGame.classList.remove('hidden')
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

