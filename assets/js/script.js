//let image = document.querySelector(".bulb-off")
    
    //image.addEventListener('click', function(){
        //changeImage()
        
    //});

    //function changeImage(){
        //image.src = "https://www.iconarchive.com/download/i45250/iconleak/or/light-bulb.ico"
//};
let computerSerie = [];
let userSerie = [];
let level = 0;

const startButton = document.getElementById("startButton");
const sequenceLevel = document.querySelector(".waitMode");  //
const sectionContainer = document.querySelector(".container")
const levelsCounter = document.querySelector(".counter")
const endGame = document.querySelector(".success")
const gameLost = document.querySelector(".lost")

function startGame() {
    startButton.classList.add('hidden');
    sequenceLevel.classList.remove('hidden');
    levelsCounter.classList.remove('counter');
    nextTurn();
}

function nextTurn() {
   level += 1;
   sectionContainer.classList.add('unclickable');
   levelsCounter.textContent = `Level ${level} of 10`;

}

startButton.addEventListener('click', startGame);

//----function activeBulb(number) {
    //const bulb = document.querySelector(`[data-lightbox='${number}']`);

   // bulb.classList.remove('bulb-on');

   // setTimeout(() => {
       // bulb.classList.add('bulb-on');
    //}, 400);
//}

//function nextTap() {
    //const 
//}



   //const nextSerie = [computerSerie];
   //nextSerie.push(nextTap());
   //playLevel(nextSerie);

   //computerSerie = [nextSerie];
   //setTimeout(() => {
   //userTurn(level);
  //}, level * 500 + 1000);
//}

//function playLevel(nextSerie) {
   // nextSequence.forEach((number, index) => {
     // setTimeout(() => {
        //  activeBulb(number);
      //},(index + 1)* 500);
   // });
//}