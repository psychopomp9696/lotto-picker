const diceButton = document.getElementById('dice');
const lottoNumbersDiv = document.querySelector('.lotto-numbers');

diceButton.addEventListener('click', () => {
  diceButton.classList.add('throwing');
});

diceButton.addEventListener('animationend', () => {
  diceButton.classList.remove('throwing');
  generateNumbers();
});

function getColor(num) {
  if (num >= 1 && num <= 10) return '#FFD700'; // 노란색
  if (num >= 11 && num <= 20) return '#1E90FF'; // 파란색
  if (num >= 21 && num <= 30) return '#FF4500'; // 빨간색
  if (num >= 31 && num <= 40) return '#A9A9A9'; // 회색
  if (num >= 41 && num <= 45) return '#7CFC00'; // 연두색
}

function generateNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  numbers.sort((a, b) => a - b);

  lottoNumbersDiv.innerHTML = numbers.map(n => `
    <span class="ball" style="background-color: ${getColor(n)};">${n}</span>
  `).join('');
}
