function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourTop = Math.floor(hours / 10);
  const hourBottom = hours % 10;

  const minuteTop = Math.floor(minutes / 10);
  const minuteBottom = minutes % 10;

  const secondTop = Math.floor(seconds / 10);
  const secondBottom = seconds % 10;

  setFlipDigit("hourTop", hourTop);
  setFlipDigit("hourBottom", hourBottom);

  setFlipDigit("minuteTop", minuteTop);
  setFlipDigit("minuteBottom", minuteBottom);

  setFlipDigit("secondTop", secondTop);
  setFlipDigit("secondBottom", secondBottom);
}

function setFlipDigit(digitId, digitValue) {
  const digitTop = document.getElementById(`${digitId}-top`);
  const digitBottom = document.getElementById(`${digitId}-bottom`);

  digitTop.innerText = digitValue;
  digitBottom.innerText = digitValue;

  const flipContainer = document.getElementById(`${digitId}-container`);
  flipContainer.classList.remove("flip");
  void flipContainer.offsetWidth;
  flipContainer.classList.add("flip");
}

updateClock();
setInterval(updateClock, 1000);
