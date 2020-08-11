'use strict';
const STORE = [
  {
    id: 1,
    // When was halo first released? 'November 15 2000': false, 'November 15, 2001': true, 'November 15, 20002': false, 'November 15, 2003': false
    question: 'When was Halo first released?',
    answers: [
      ['November 15 2000', false],
      ['November 15, 2001', true],
      ['November 15, 20002', false],
      ['November 15, 2003', false]
    ]
  },
  {
    id: 2,
    // what is the main characters name? 'Master Chief John-117': True, 'Cortana': false, 'Spartan': false, 'Barney': false
    question: 'Who is the main character?',
    answers: [
      ['Master Chief John-117', true],
      ['Cortana', false],
      ['Spartan', false],
      ['Barney', false]
    ]
  },
  {
    id: 3,
    // What game studio originally developed Halo? 'Bungie': true, '343 Industries': false, 'Creative Assembly': false, Ensemble Studios: false
    question: 'What game studio originally developed Halo?',
    answers: [
      ['Bungie', true],
      ['343 Industries', false],
      ['Creative Assembly', false],
      ['Ensemble Studios', false]
    ]
  },
  {
    id: 4,
    // How many games were developed by the Halo Franchise? 16: True, 5: false, 8: false, 9: false
    question: 'How many games were developed in the Halo Franchise?',
    answers: [
      [5, false],
      [8, false],
      [16, true],
      [9, false]
    ]
  },
  {
    id: 5,
    // How much is the Halo franchise worth? '$5 billion': true, '$3 billion': false, '$6 billion': false, '$7 Billion': false
    question: 'Who is the main character?',
    answers: [
      ['$3 Billion', false],
      ['$6 Billion', false],
      ['$7 Billion', false],
      ['$5 Billion', true]

    ]
  },
]; // all of the questions and page information

const answers = [];
const possibleGamestates = [
    'toStart',
    'playing',
    'true',
    'false',
  'end' 
];

let i = 0;



function defineGamestate(index) {
    if (!index) return possibleGamestates[0];
    return possibleGamestates[index];
}

function findRightAnswer(index) {
   return STORE[index].answers.find(el => el[1] === true)[0];
}


// create a function to inject values into our HTML based on i index in game
// i > 0 but also < 6 is in game, 5 questions total, 1 - 5
function createHTML(index) {
  switch(defineGamestate(index)) {

  // GAMESTATE SET TO PLAYING
  case 'playing':
    return `<div class="question-box">
        <h1>Question ${STORE[i].id}/${STORE.length}</h1>
        <h3>${STORE[i].question}</h3>
        </div>
        <div>
        <form class="answers">
        <input id="radio1" type="radio" name="answer" value="${STORE[i].answers[0][1]}" required>
        <label for="radio1">${STORE[i].answers[0][0]}</label>
        
        <input id="radio2" type="radio" name="answer" value="${STORE[i].answers[1][1]}">
        <label for="radio2">${STORE[i].answers[1][0]}</label>
        
        <input id="radio3" type="radio" name="answer" value="${STORE[i].answers[2][1]}">
        <label for="radio3">${STORE[i].answers[2][0]}</label>
        
        <input id="radio4" type="radio" name="answer" value="${STORE[i].answers[3][1]}">
        <label for="radio4">${STORE[i].answers[3][0]}</label>
        
    
        <button class="submit-button" type="submit">Submit</button>
        </form>
        </div>`;

  // GAMESTATE INDEX SET TO BEGINNING, OR DEFAULT
  case 'toStart':
    return `<div class="question-box">
        <h1>Halo Quiz!</h1>
        <h3></h3>
        </div>
        <div>
        
        <div class="next-button-box">
        <button>Start Quiz</button>
        </div>
        </div>`;

  // GAMESTATE INDEX SET TO END
  case 'end':
    return `<div class="question-box">
        <h1>Restart !</h1>
        <h3></h3>
        </div>
        <div>
        
        <div class="next-button-box">
        <button id="restart-game">Restart Quiz</button>
        </div>
        </div>`;
  // GAMESTATE INDEX SET TO TRUE
  case 'true':
    return `<div class="question-box">
    <h1>Correct!</h1>
    <h3>Nice Job!</h3>
    </div>
    <div>
    
    <div class="next-button-box">
    <button id="next-question">Next Question</button>
    </div>
    </div>`;

  // GAMESTATE INDEX SET TO FALSE
  case 'false':
    return`<div class="question-box">
    <h1>Incorrect!</h1>
    <h3>The correct answer is [${findRightAnswer(i)}]</h3>
    </div>
    <div>
    
    <div class="next-button-box">
    <button id="restart-game">Restart Quiz</button>
    </div>
    </div>`;
  default: 
    return `<div class="question-box">
    <h1>Halo Quiz!</h1>
    <h3></h3>
    </div>
    <div>
    
    <div class="next-button-box">
    <button>Start Quiz</button>
    </div>
    </div>`;
  }
}
    
// handle submit
function handleSubmitClick() {
  $('main').on('submit', 'form.answers', function(e) {
    e.preventDefault();
    const wrongOrRight = $('input[name="answer"]:checked').val();
    console.log(answers);
    answers.push(wrongOrRight);
    handleNextRender(wrongOrRight);
});
}

function handleNextRender(index) {
    
}
// function for next question 
// tie that function to an event listenever, eventually

// correct counter will filter for true and return length / array.length

// reset game function
// i to 0
// i counter off
// gamestate to 'toStart'
// answers array.length = 0;



function renderHTML(htmlVar) {
  $('main').html(htmlVar);
}

function main() {
  renderHTML(createHTML(1));
  handleSubmitClick();
}

main(); // loaded first

// TO DO
// correct counter