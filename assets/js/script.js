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

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden');
    sequenceLevel.classList.remove('hidden');
    levelsCounter.classList.remove('counter');
    nextTurn();
}

function nextTurn() {
   level += 1;
   sectionContainer.classList.add('unclickable');
   levelsCounter.textContent = `Level ${level} of 20`;
}



