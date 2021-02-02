*_Welcome!_* [github]()

# UX

## LIGHTBULB GAME

I realized this project as part of the Interactive Front-end development module that I am completing at "code institute" training course.

***

### Project Story:

For this project I decided to do a  game inspired by Simon game. It is a memory game where you have to follow the sequence and copy the sequence correctly to move on to the next level after completing 10 levels you have won otherwise you have lost.
Firstly I realized  the HTML for the game and using bootstrap libraries to make page responsive then after I finished to style it with css.
Once I completed the static part of the game I create the script using javascript, first step I create three variables 'LET' to assign the empty arrays human sequence, A.I sequence and  starting point level[0].
Then I used an event listener to the bulbContainer const. which  element that  clicked is accessed and stored in the bulb variable.
I also add a specific audio to each lightbulbs and text messages.
My goal was also to create a reset button but i gave up to focus on making the game functional.
I decided to not rely on jQuery in order to test my abilities with Javascript.

---

### Players Goals:

1. A challenging game to play.

2. In this project the lights flash and the user has to copy the sequence and click the correct bulb. 

3. Users in order to win are supposed to reach level 10.

4. The game gets harder the longer you play!


---

## Project's wireframes:
  ![Wireframe Desktop](https://user-images.githubusercontent.com/61980577/101829416-457b2000-3b33-11eb-9c01-6facc17d5a79.png)

  ![ Wireframe Ipad](https://user-images.githubusercontent.com/61980577/101829422-46ac4d00-3b33-11eb-8c93-4185bd223458.png)

  ![ Wireframe Smartphone](https://user-images.githubusercontent.com/61980577/101829427-48761080-3b33-11eb-913f-338b5199cb69.png)

  ![ Wireframe iPhone](https://user-images.githubusercontent.com/61980577/101829432-4a3fd400-3b33-11eb-9461-29dbf5f6d488.png)

---

## Project's Mockups screenshots:

  ![Project's Mockups](https://user-images.githubusercontent.com/61980577/101830405-bec74280-3b34-11eb-97d1-ead5a9b85e74.png)


---
# Features


## Existing featers:

* Feature1:All game controls are displayed in a intuitive way.

* Feature2:It has a counter so the user knows what level they are on throughout the game.

* Feature3:When game ends an info message users will be notified either they have won or lost.

* Feature4:I have used a random function which will allow the game to use a unique sequence each time.

* Feature5:If users press the wrong button, they are notified to have done so.

* Feature6:.Fun  bulbs images and a suitable background image.

## features left to implement

* Feature1:A feature to implement is create a 'reset' buttons to let the users have control of the game.

---
# Technologies used

## Programming Languages:

* HTML

* CSS

* JAVASCRIPT

### Libraries:

* [Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/)

    * This project uses  Bootstrap 4 Grid System  for responsive layouts and Css Style.

***
# Testing

### Steps to follow to play the game:

* The Homepage includes the game's name "Lightbulb Game" at the top, six boxes are in the middle of the page, each box contains a lightbulb with different colors and shape and finally a Start blue button just below the boxes.

* As a user pushing Start button, it makes the game to trigger, a text message "wait for the computer" appears at the bottom left[Computer Sequence](https://github.com/GiovanniSalvi/Bulb-lights-Game/blob/master/assets/images/Computer%20sequence.png). When the computer sequence initiates , one out of six lightbulbs randomly flashes(disappear for 0.5 seconds),after that a text message "your turn: tap 1" replace the previuos message.

* As a user games' goal is to tap the same bulb as the computer in order to move forward with the match[User Tap](https://github.com/GiovanniSalvi/Bulb-lights-Game/blob/master/assets/images/Usertap.png).
    * If user taps the same bulb as the computer, a text message "well done" appears for few seconds then it will be replaced by a "wait for the computer" message when game steps up to the second level[Successful Tap](https://github.com/GiovanniSalvi/Bulb-lights-Game/blob/master/assets/images/Successful%20tap.png).A new computer sequence starts now and it  increments by one so will flash two bulbs and so on.
    * Else user taps wrong bulb,a red blinking text message "GAME OVER! Tap wrong light" appears at the bottom left[Game Over](https://github.com/GiovanniSalvi/Bulb-lights-Game/blob/master/assets/images/Game%20over.png).After 5 seconds this message  is going to disappear,the game get resetted and Start button will show up again below the boxes.

* As a user if I will be able to tap right bulbs matching computer sequence for 10 times consecutive, passing all 10 levels, a green blinking text message "Congrats,YOU WON!" will appear at the bottom left[You Won](https://github.com/GiovanniSalvi/Bulb-lights-Game/blob/master/assets/images/Winning%20game.png).After 5 seconds this message is going to disappear,the game get resetted and Start button will show up again below the boxes ready for a new match.

---

### The project has been validated using:

* [validator.w3.org](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgiovannisalvi.github.io%2FBulb-lights-Game%2F) for HTML language.

* [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgiovannisalvi.github.io%2FBulb-lights-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) for CSS language.

* [jshint.com](https://jshint.com/) for JAVASCRIPT language

---

* The quality of the website was measured using Google Lighthouse:

  [Chrome Lighthouse Tool]
  <img width="1062" alt="Lighthouse chroome" src="https://user-images.githubusercontent.com/61980577/101937708-83834d00-3be2-11eb-8826-1352d8d71e74.png">

* The HTML and CSS code  was formatted using:

  [Freeformatter.com](https://www.freeformatter.com/)
  
* The Javascript code was formatted using:
 
  [Online JavaScript Beautifier](https://beautifier.io/)

***
  
 ### The project has beeen designed to make pages render well on a variety of devices and window or screen sizes such as:

 * Desktop: (1600x992px) Responsivness tested using ChromeDev inspector tool.


 * Laptop: (1280x802px) Responsivness tested using ChromeDev inspector tool.


 * Tablet
 1. ipad Pro: (1024x1366px) Responsivness tested using ChromeDev inspector tool.
 

 2. iPad: (768x1024px) Responsivness tested using ChromeDev inspector tool.


* Mobile
 1. Moto G4 (360x640px) Responsivness tested using ChromeDev inspector tool.
 

 2. Galaxy S5 (360x640px) Responsivness tested using ChromeDev inspector tool.
 

 2. Pixel 2 (411x731px) Responsivness tested using ChromeDev inspector tool,.
 

 3. Pixel 2 XL (411x823px) Responsivness tested using ChromeDev inspector tool.
 

 4. Iphone 6/7/8 (375x677px) Responsivness tested using ChromeDev inspector tool.

 
 5. Iphone 6/7/8 Plus (414x736px) Responsivness tested using ChromeDev inspector tool.
 
 


***
# Deployment

* Create a GitHub account.

* Use the chrome browser.

### In order to deploy the project, you need to perform some steps:

     1.Log into GitHub.

     2.From the list of repository select 'Bulb-lights-Game'.

     3.Select setting from menu bar in GitHub.

     4.Scroll down in the GitHub  pages section  and make sure that the source is set in Branch:Master then refresh the page.

     5.In the GitHub pages click on the link (Your site is published at:) where the project is deployed.

 ### In order to clone the project, you need to perform some steps:

     1.Log into GitHub

     2.From the list of repository select 'Bulb-lights-Game'.

     3.Select Code  from menu bar in GitHub.

     4.Copy the URL repository that has to be cloned from the Https section.

     5.Change the working directory to the new location where you want your project to be deployed and type gitclone.

     6.Then add,commit and push the project.

***

---
 ## Media

 
 ### Images
 
 * Background Image :

    * [Background Image](https://user-images.githubusercontent.com/61980577/101831674-8a548600-3b36-11eb-8457-af7aa4804695.jpg)

 * Lightsbulb Images :

    * [Bulb1](https://user-images.githubusercontent.com/61980577/101830813-5af14980-3b35-11eb-8d7d-dae9c80ed92d.png) 

    * [Bulb2](https://user-images.githubusercontent.com/61980577/101830911-82e0ad00-3b35-11eb-817b-0b13141b3418.png)

    * [Bulb3](https://user-images.githubusercontent.com/61980577/101830917-8411da00-3b35-11eb-85ad-c4d705bb4cb0.png)

    * [Bulb4](https://user-images.githubusercontent.com/61980577/101830924-85430700-3b35-11eb-8c6e-dd9efbc36866.png)

    * [Bulb5](https://user-images.githubusercontent.com/61980577/101830938-88d68e00-3b35-11eb-95b9-12cfa4ecff90.png)

    * [Bulb6](https://user-images.githubusercontent.com/61980577/101830954-90963280-3b35-11eb-94e4-4284f3aee490.png)


***


 ## Acknowledgements

 * I received inspiration for this project from:
   [Simon Game](https://en.wikipedia.org/wiki/Simon_(game))
