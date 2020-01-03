var questionInput = document.querySelector("input");
var messageCard = document.querySelector(".user-card");
var answerBtn = document.querySelector(".get-answer-btn");
var clearBtn = document.querySelector(".clear-btn");
var eightBallImage = document.querySelector(".eight-ball");

clearBtn.addEventListener("click", showEightBall);
answerBtn.addEventListener("click", replaceImageWithAnswer);


function replaceImageWithAnswer() {
  eightBallImage.classList.add("hidden");
  messageCard.classList.remove("hidden");
  clearBtn.classList.add("active-clear-btn");
  addCard();
  showDefaultInputMsg();
}

function showDefaultInputMsg() {
  questionInput.value = "Ask your question here!";
}

function showEightBall() {
  // removeCard();
  eightBallImage.classList.remove("hidden");
  messageCard.classList.add("hidden");
  clearBtn.classList.remove("active-clear-btn");
}

// function removeCard() {
//   if (event.target.classList.contains("clear-btn")) {
//   }
// };

function addCard() {
  var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
  var randomize = Math.floor(Math.random()*answers.length);
  var show = answers[randomize];
  messageCard.insertAdjacentHTML("afterbegin", `
    <p class="user-question">"${questionInput.value}"</p>
    <p class="user-answer">${show}</p>
  `);
};

//
