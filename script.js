let userScore = 0;
let audiogo = new Audio("mixkit-player-losing-or-failing-2042.wav");
let audiosttf = new Audio("mixkit-page-turn-single-1104.wav");
let audiobound = new Audio(
  "mixkit-auditorium-moderate-applause-and-cheering-502.wav"
);

const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
  const option = ["one", "two", "three", "four", "five", "six"];
  const randIdx = Math.floor(Math.random() * 6);
  return option[randIdx];
};
const LoseGame = () => {
  userScore = 0;
  msg.innerHTML = "Game over";
  audiogo.play();
  setTimeout(() => {
    audiogo.pause();
  }, 1000);
};
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);
  if (userChoice === compChoice) {
    LoseGame();
  } else {
    if (userChoice === "one") {
      userScore += 1;
      updateScore(userScore);
      audiosttf.play();
      setTimeout(() => {
        audiosttf.pause();
      }, 1000);
    } else if (userChoice === "two") {
      userScore += 2;
      updateScore(userScore);
      audiosttf.play();
      setTimeout(() => {
        audiosttf.pause();
      }, 1000);
    } else if (userChoice === "three") {
      userScore += 3;
      updateScore(userScore);
      audiosttf.play();
      setTimeout(() => {
        audiosttf.pause();
      }, 1000);
    } else if (userChoice === "four") {
      userScore += 4;
      updateScore(userScore);
      audiobound.play();
      setTimeout(()=>{
         audiobound.pause();
  },1000)

    } else if (userChoice === "five") {
      userScore += 5;
      updateScore(userScore);
      audiosttf.play();
      setTimeout(() => {
        audiosttf.pause();
      }, 1000);
    } else if (userChoice === "six") {
      userScore += 6;
      updateScore(userScore);
      audiobound.play();
    setTimeout(()=>{
       audiobound.pause();
},1000)
    }
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
function updateScore(userScore) {
  us.innerHTML = userScore;
}
