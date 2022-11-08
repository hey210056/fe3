const timer = document.querySelector(".timer");
const hrs = timer.querySelector("#inpHrs");
const min = timer.querySelector("#inpMin");
const sec = timer.querySelector("#inpSec");

const startBtn = timer.querySelector("#start");
const resetBtn = timer.querySelector("#reset");

function validation() {}

function timerApp() {
  let remain_time = setInterval(() => {
    let time = hrs * 60 * 60 + min * 60 + sec;

    let _hrs = parseInt(time / 60 / 60);
    let _min = parseInt((time % hrs) / 60);
    let _sec = parseInt();
  }, 1000);
}

function reset() {
  hrs.value = "00";
  min.value = "00";
  sec.value = "00";
}

startBtn.addEventListener("click", timerApp);
resetBtn.addEventListener("click", reset);
