var readlineSync = require("readline-sync");

console.log("Welcome to the F.R.I.E.N.D.S quiz!!");
console.log("\nQualification criteria: \n1)Get all n answers right to go to level 2\n2)Get n-1 answers right out of n to go to level 3\nPoints for right answers:\nLevel-1: 3\nLevel-2: 5\nLevel-3: 10\nAll the best beating the High Scores!!\n");

var eachLevelPoints = [3, 5, 10];

var score = 0;
var currentLevel = 0;

var highScore = [
  {
    name: "Nivi",
    score: 79
  },
  {
    name: "Malay",
    score: 69
  }
];

var easyQuestions = [
  {
    question: `
How many times has Ross been married?
a: 1
b: 2
c: 3
Your Answer: `,
    answer: "c"
  },
  {
    question: `
What's the name of Phoebe's twin sister?
a: Phoebo
b: Ursula  
c: Lily
Your Answer: `,
    answer: "b"
  },
  {
    question: `
What's Chandler's middle name?
a: Muriel
b: Mike
c: Mark
Your Answer: `,
    answer: "a"
  }
];

var mediumQuestions = [
  {
    question: `
Who is Rosita?
a: Joey's ex girlfriend
b: Monica and Chandler's housekeeper
c: Joey's armchair
Your Answer: `,
    answer: "c"
  },
  {
    question: `
What's the name of the TV series in which Joey played with a robot?
a: Days of our lives
b: Mac and Cheese
c: Baywatch
Your Answer: `,
    answer: "b"
  },
  {
    question: `
What does Phoebe find in a can of soda?
a: An earring
b: A thumb
c: A hair
Your Answer: `,
    answer: "b"
  },
  {
    question: `
How Amy(Rachel's sister) calls Emma?
a: Ella
b: Emile
c: Emily
Your Answer: `,
    answer: "a"
  }
];

var hardQuestions = [
  {
    question: `
What accent does Ross do when he teaches at university?
a: English
b: Irish
c: Australian
Your Answer: `,
    answer: "a"
  },
  {
    question: `
What's the name of Richard's son?
a: Richard Junior
b: Parker
c: Timothy
Your Answer: `,
    answer: "c"
  },
  {
    question: `
Phoebe thinks her grandfather is a celebrity, which one?
a: Isaac Newton
b: Pierre Curry
c: Albert Einstein
Your Answer: `,
    answer: "c"
  },
  {
    question: `
What's the job that Amy, Rachel's sister, wants to do?
a: Stylist for bachelors
b: Stylist for babies
c: Stylist for dogs
Your Answer: `,
    answer: "b"
  },
  {
    question: `
Which Friends is the youngest?
a: Monica
b: Chandler
c: Rachel
Your Answer: `,
    answer: "c"
  }
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Correct!");
    score += eachLevelPoints[currentLevel];
    console.log("Your current Score: " + score);
  } else {
    console.log("Wrong!");
  }
}

function playlevel(levelArray) {
  console.log("-------");
  console.log("Level-" + (currentLevel + 1));
  console.log("-------");
  for (var i = 0; i < levelArray.length; i++) {
    play(levelArray[i].question, levelArray[i].answer);
  }
  console.log("Your final score for level: " + score);
}

function game() {

  var levels = [easyQuestions, mediumQuestions, hardQuestions];

  var scoreToBeat = 0;

  for (var i = 0; i < levels.length; i++) {
    playlevel(levels[i]);

    if (i === (levels.length - 1)) {
      break;
    }

    scoreToBeat += (levels[i].length - i) * eachLevelPoints[currentLevel];

    if (score >= scoreToBeat) {
      console.log("YAY! You go to the next round!\n");
      currentLevel++;
    } else {
      console.log("You didnt get enought score to qualify to the next round! Better luck next time!");
      break;
    }
  }
}

function printScore() {
  console.log("----------------------------------");
  console.log("Your final score for the quiz: " + score + "\nCheck out the highscores below: ");

  for (var i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name + " : " + highScore[i].score);
  }

  console.log("Ping me if you want your Score to be added!");
}

game();
printScore();