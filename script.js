// 1. 시간을 업데이트하는 함수
function updateTime() {
  // 현재 시간 가져오기
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // 시간, 분, 초의 자리수가 1자리일 경우 앞에 0 추가
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // 시간 업데이트
  document.querySelector(".hours1 .number").textContent = hours.toString()[0];
  document.querySelector(".hours2 .number").textContent = hours.toString()[1];
  // 분 업데이트
  document.querySelector(".minutes1 .number").textContent = minutes.toString()[0];
  document.querySelector(".minutes2 .number").textContent = minutes.toString()[1];
  // 초 업데이트
  document.querySelector(".seconds1 .number").textContent = seconds.toString()[0];
  document.querySelector(".seconds2 .number").textContent = seconds.toString()[1];
}

// 2. 시계 초기화 함수
function initClock() {
  updateTime(); // 처음 로딩시 시간 업데이트
  setInterval(updateTime, 1000); // 1초마다 시간 업데이트
}

// 3. 시계 초기화 실행
initClock();
