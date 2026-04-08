const para = document.querySelector('.para');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let count = 0;
let timer;

function formatTime(seconds) {
  const mins = Math.floor(seconds/ 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', startCounting);
stopBtn.addEventListener('click', pauseCounting);
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  count = 0;
  para.innerHTML = formatTime(count);
});
 
function startCounting() {
  if(!timer) {
    timer = setInterval(() => {
      count++;
      para.innerHTML = formatTime(count);
    }, 1000);
  }
  }

function pauseCounting() {
  clearInterval(timer);
  timer = null;
  console.log("Paused at:", count);
}