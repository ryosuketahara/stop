'use script'
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

 function countUp() {
  //  console.log(Date.now() - startTime);
   const d = new Date(Date.now() - startTime + elapsedTime);
   const m = String(d.getMinutes()).padStart(2,'0');
   const s = String(d.getSeconds()).padStart(2,'0');
   const ms = String(d.getMilliseconds()).padStart(3,'0');
   timer.textContent = `${m}:${s}.${ms}`;

   timeoutId = setTimeout(() => {
     countUp();
   },10);


 }

  function setButtonStateInitial(){
    start.classList.remove('inactiv');
    stop.classList.add('inactiv');
    reset.classList.add('inactiv');
  }

  function setButtonStateRunning(){
    start.classList.add('inactiv');
    stop.classList.remove('inactiv');
    reset.classList.add('inactiv');
  }

  function setButtonStateStopped(){
    start.classList.remove('inactiv');
    stop.classList.add('inactiv');
    reset.classList.remove('inactiv');
  }

  setButtonStateInitial();

  start.addEventListener('click', () => {
    if(start.classList.contains('inactiv') === true){
      return;
    };
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    if(stop.classList.contains('inactiv') === true){
      return;
    };
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    if(reset.classList.contains('inactiv') === true){
      return;
    };
    setButtonStateInitial()
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });















}