/* eslint-disable no-undef */
'use strict';
const STORE = [
  {
    id: 1,
    // When was halo first released? 'November 15 2000': false, 'November 15, 2001': true, 'November 15, 20002': false, 'November 15, 2003': false
    question: 'When was Halo first released?',
    answers: [
      ['November 15 2000', false],
      ['November 15, 2001', true],
      ['November 15, 2002', false],
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
    question: 'How much is the Halo franchise worth?',
    answers: [
      ['$3 Billion', false],
      ['$6 Billion', false],
      ['$7 Billion', false],
      ['$5 Billion', true]

    ]
  },
]; // all of the questions and page information

// store answers from user
const answers = [];

// game set initialized with render(createHTML(defineGameState(0)))
const possibleGamestates = [
  'toStart',
  'playing',
  'true',
  'false',
  'end' 
];

// track which question is to be displayed
let i = 0;


// be able to change state of game w/ buttons
// determine which html in createhtml switch case to use
function defineGamestate(index) {
  if (!index) return possibleGamestates[0];
  return possibleGamestates[index];
}

// find array index of 'true' in store[index].answers[------]
function findRightAnswer(index) {
  return STORE[index].answers.find(el => el[1] === true)[0];
}


// create a function to inject values into our HTML based on i index in game
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
        <div class="counter-box">${answers.filter(el => el === 'true').length}/${STORE.length} correctly answered</div>
        </div>`;

  // GAMESTATE INDEX SET TO BEGINNING, OR DEFAULT
  case 'toStart':
    return `<div class="question-box">
        <h1>Halo Quiz!</h1>
        <h3>Andrew Dela Rosa && Michael Sliger</h3>
        </div>
        <div>
        
        <div class="next-button-box">
        <button id='start-quiz'>Start Quiz</button>
        </div>
        </div>`;

  // GAMESTATE INDEX SET TO END
  case 'end':
    return `<div class="question-box">
        <h1>Results!</h1>
        <h3></h3>
        </div>
        <div>
        
        <div class="counter-box">${answers.filter(el => el === 'true').length}/${STORE.length} correctly answered</div>
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
    <div class="counter-box">${answers.filter(el => el === 'true').length}/${STORE.length} correctly answered</div>

    <div class="next-button-box">
    <button class="css-next-button" id=${(i === STORE.length - 1) ? 'end-game' : 'next-question'}>${(i === STORE.length - 1) ? 'End Game' : 'Next Question'}</button>
    </div>
    </div>`;

  // GAMESTATE INDEX SET TO FALSE
  case 'false':
    return`<div class="question-box">
    <h1>Incorrect!</h1>
    <h3>The correct answer is ${findRightAnswer(i)}</h3>
    </div>
    <div>
    <div class="counter-box">${answers.filter(el => el === 'true').length}/${STORE.length} correctly answered</div>

    <div class="next-button-box">
    <button class="css-next-button" id=${(i === STORE.length - 1) ? 'end-game' : 'next-question'}>${(i === STORE.length - 1) ? 'End Game' : 'Next Question'}</button>
    </div>
    </div>`;
  default: 
    return `<div class="question-box">
    <h1>Halo Quiz!</h1>
    <h3></h3>
    </div>
    <div>
    
    <div class="next-button-box">
    <button id='start-quiz'>Start Quiz</button>
    </div>
    </div>`;
  }
}
    
// handle submit
function handleSubmitClick() {
  $('main').on('submit', 'form.answers', function(e) {
    e.preventDefault();
    const wrongOrRight = $('input[name="answer"]:checked').val();
    answers.push(wrongOrRight);
    handleNextRenderFromSubmit(wrongOrRight);
  });
}

// next for answer submits
function handleNextRenderFromSubmit(input) {
// true if correct, false if incorrect
  switch(input) {
  case 'true':
    renderHTML(createHTML(2));
    break;
  case 'false':
    renderHTML(createHTML(3));
    break;
  }
}

// function for next question button
function handleNextButtonClick() {
  $('main').on('click', '#next-question', function() {
    i++;
    renderHTML(createHTML(1));
  });
}

// function for starting the quiz
function handleStartQuizClick() {
  $('main').on('click', '#start-quiz', function(){
    renderHTML(createHTML(1));
  });
}
// correct counter will filter for true and return length / array.length

// reset game function
// i to 0
// gamestate to 'toStart'
// answers array.length = 0;
function handleResetButtonClick() {
  $('main').on('click', '#restart-game', function() {
    i = 0;
    // i counter?
    answers.length = 0;
    renderHTML(createHTML(0)); // create first page
  });
}

// load last page when clicked
function handleEndGameButton() {
  $('main').on('click', '#end-game', function(){
    renderHTML(createHTML(4));
  });
}

// render page, will come from createhtml
function renderHTML(htmlVar) {
  $('main').html(htmlVar);
}

function main() {
  renderHTML(createHTML(0)); // create first page
  handleSubmitClick(); // event listeners 
  handleStartQuizClick(); // ||
  handleNextButtonClick(); // ||
  handleResetButtonClick(); // ||
  handleEndGameButton(); // ||
}

main(); // loaded first

// TO DO
// correct counter