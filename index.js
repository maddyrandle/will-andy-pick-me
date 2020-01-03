var userQuestion = document.querySelector("input");
var userCard = document.querySelector(".user-card");
var getAnswer = document.querySelector(".get-answer-btn");
var clearBtn = document.querySelector(".clear-btn");
var eightBall = document.querySelector(".eight-ball");

clearBtn.addEventListener("click", resetQAndA);
getAnswer.addEventListener("click", replaceImage);


function replaceImage() {
  eightBall.classList.add("hidden");
  userCard.classList.remove("hidden");
  addCard();
  clearForm();
}

function clearForm() {
  userQuestion.value = "Ask your question here!";
}

function resetQAndA() {
  removeCard();
  eightBall.classList.remove("hidden");
  userCard.classList.add("hidden");
}

function removeCard() {
  if (event.target.classList.contains("clear-btn")) {
  }
};

function addCard() {
  var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
  var randomize = Math.floor(Math.random()*answers.length);
  var show = answers[randomize];
  userCard.insertAdjacentHTML("afterbegin", `
    <p class="user-question">"${userQuestion.value}"</p>
    <p class="user-answer">${show}</p>
  `);
};

// function showRandomAnswer() {
//   var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
//   var randomize = Math.floor(Math.random()*answers.length);
//   var show = answers[randomize];
//
// }
//
