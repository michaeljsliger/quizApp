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
    question: 'Who is the main character?',
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
  }

];

// create a function to inject values into our HTML
const htmlTemplate = `<div class="question-box">
<h1>Question ${STORE[0].id}/${STORE.length}</h1>
<h3>${STORE[0].question}</h3>
</div>
<div>
<form class="answers">
    <input id="radio1" type="radio" name="answer" value="${STORE[0].answers[0][1]}" required>
    <label for="radio1">${STORE[0].answers[0][0]}</label>

    <input id="radio2" type="radio" name="answer" value="${STORE[0].answers[1][1]}">
    <label for="radio2">${STORE[0].answers[1][0]}</label>

    <input id="radio3" type="radio" name="answer" value="${STORE[0].answers[2][1]}">
    <label for="radio3">${STORE[0].answers[2][0]}</label>
    
    <input id="radio4" type="radio" name="answer" value="${STORE[0].answers[3][1]}">
    <label for="radio4">${STORE[0].answers[3][0]}</label>

    
    <button type="submit">Submit</button>
</form>
</div>`;




function renderHTML(htmlVar) {
$('main').html(htmlVar);
}

function main() {
    renderHTML(htmlTemplate);
}

main()