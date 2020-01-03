var questionInput = document.querySelector("input");
var messageCard = document.querySelector(".message-card");
var answerBtn = document.querySelector(".get-answer-btn");
var clearBtn = document.querySelector(".clear-btn");
var eightBallImage = document.querySelector(".eight-ball");

clearBtn.addEventListener("click", showEightBall);
answerBtn.addEventListener("click", replaceImageWithAnswer);


function replaceImageWithAnswer() {
  eightBallImage.classList.add("hidden");
  messageCard.classList.remove("hidden");
  clearBtn.classList.add("active-clear-btn");
  showMessage();
  showDefaultInputText();
}

function showDefaultInputText() {
  questionInput.value = "Ask your question here!";
}

function showEightBall() {
  eightBallImage.classList.remove("hidden");
  messageCard.classList.add("hidden");
  clearBtn.classList.remove("active-clear-btn");
  clearBtn.disabled = true;
}



function showMessage() {
  var eightBallAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
  var randomize = Math.floor(Math.random()*eightBallAnswers.length);
  var randomAnswer = eightBallAnswers[randomize];
  messageCard.insertAdjacentHTML("afterbegin", `
    <p class="question">"${questionInput.value}"</p>
    <p class="random-answer">${randomAnswer}</p>
  `);
  clearBtn.disabled = false;
};

//
