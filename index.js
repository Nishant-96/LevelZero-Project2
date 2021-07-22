var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.redBright('What is your Name ?\n'));
console.log(chalk.red("\nWelcome ") +chalk.red.underline(userName)+chalk.red(" To ")+ chalk.black.bgYellowBright.bold("MARVEL FANDOM QUIZ\n"));
console.log(chalk.blue.underline("Rules:\n1) For each question, enter the option number as 1, 2, 3 or 4. \n2) You DO NOT need to press enter after the option number.\n"));
console.log(chalk.red("Lets see if you are a superfan or not.\n"));


//Questions List

var questions = [questionOne = {
  question: "What song plays at the beginning of the movie IRONMAN ?",
  options: ["IRON MAN by Black Sabbath", "Stairway to Heaven by Led Zeppelin", "Black in Black by ACDC", "Ordinary World by Duran Duran"],
  answer: "Black in Black by ACDC"
}, questionTwo = {
  question: "What fake name does Natasha use when she first meets Tony in IRON MAN 2 ?",
  options: ["Nicole", "Naya", "Natasha", "Natalie"],
  answer: "Natalie"
}, questionThree = {
  question: "In Avengers Natasha remarks to Clint that the Battle of New York is a lot like there time in where ? ",
  options: ["Budapest", "Sokovia", "Russia", "Belarus"],
  answer: "Budapest"
}, questionFour = {
  question: "What is the name of the little boy Tony befriends while stranded in IRON MAN 3 ?",
  options: ["Harry", "Harley", "Peter", "Frank"],
  answer: "Harley"
}, questionFive = {
  question: "What was the nickname you Sgt. James Buchanan barnes ?",
  options: ["James", "Jamiee", "Bucky", "Barney"],
  answer: "Bucky"
}, questionSix = {
  question: "What was the nickname given to thor by tony ?",
  options: ["Cinderalla", "Shakespeare", "Pointbreak", "Sparky"],
  answer: "Pointbreak"
}, questionSeven = {
  question: "ANT-MAN AND THE WASP: Scott hid an old Ant-Man suit underneath a trophy. What did the trophy say ?",
  options: ["World's Greatest Dad", "World's Greatest Superhero", "World's Greatest Aunt", "World's Greatest Grandma"],
  answer: "World's Greatest Grandma"
}, questionEight = {
  question: "In CAPTAIN AMERICA: CIVIL WAR Who was not on Iron Man's team ?",
  options: ["Vision", "Hawkeye", "Black widow", "War Machine"],
  answer: "Hawkeye"
}, questionNine = {
  question: "What does Thor want another of when he's in the diner in Thor 1?",
  options: ["Pie", "Coffee", "Toast", "Pancake"],
  answer: "Coffee" 
  }, questionTen={
    question:"What was the event of Thanos snapping called later in the world ?",
    options: ["Blip", "Reincarcination", "Snap", "Flip"],
    answer: "Blip"
  }];

// Quiz execution

var score=0;

function fandomQuiz(question,options,answer){
  console.log(question);
  var yourAnswer = readlineSync.keyInSelect(options,"Enter option number:",{cancel : false});
  if(options[yourAnswer]===answer){
    score++;
    console.log(chalk.green("You are Right !\n"));
    console.log(chalk.green("Your Score is:", score+"\n"));
    console.log(chalk.red('-----------------------------------\n'));
  }else{
    console.log(chalk.red("Oops !! So Close !!! \n"));
    console.log(chalk.red("Your Score is:",score+"\n"));
    console.log(chalk.red("------------------------------------"));
  }
}

for(i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  fandomQuiz(currentQuestion.question,currentQuestion.options,currentQuestion.answer);
}

// scores
console.log(chalk.cyanBright("Great ")+ chalk.cyanBright.underline(userName) +chalk.cyanBright(" Your Final Score is: ", score +"\n"));

if(score>=9){
  console.log(chalk.black.bgGreenBright.bold("You are a SUPER FAN.\n"));
}else{
  console.log(chalk.bgRed.bold("Someday will see you in the superfan list.\n"));
}

var highScores=[
  {
    playerName : "Nishant",
    score : 10
  }, 
  
  {
    playerName : "Kishor ",
    score : 9
  },
  {
    playerName : "Swapnanil",
    score : 8
  }];

 console.log(chalk.cyanBright("Check out the top three scores: \n"));
 console.table(highScores);
 