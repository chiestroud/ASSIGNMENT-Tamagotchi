let full = 100;

const getScore = () => {
  full = document.querySelector('#full').innerHTML;
  return Number(full);
};

const updateScore = (newScore) => {
  document.querySelector('#full').innerHTML = newScore;
};

const buttonFunc = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'healthyButton') {
    full = getScore();
    if (full + 10 < 100) {
      full += 10;
      updateScore(full);
    } else {
      const remain = 100 - full;
      updateScore(full + remain);
    }
  }
  if (buttonId === 'badButton') {
    full = getScore();
    full -= 3;
    updateScore(full);
  }
};

const buttonHandleEvent = () => {
  document.querySelector('#healthyButton').addEventListener('click', buttonFunc);
  document.querySelector('#badButton').addEventListener('click', buttonFunc);
};

export default buttonHandleEvent;
