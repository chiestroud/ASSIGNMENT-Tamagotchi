let fun = 50;

const getFunScore = () => {
  fun = document.querySelector('#fun').innerHTML;
  return Number(fun);
};

const updateScore = (newScore) => {
  document.querySelector('#fun').innerHTML = newScore;
};

const funButtonFunc = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'funButton') {
    fun = getFunScore();
    if (fun + 50 < 100) {
      fun += 50;
      updateScore(fun);
    } else {
      const remain = 100 - fun;
      updateScore(fun + remain);
    }
  }
  if (buttonId === 'littleFunButton') {
    fun = getFunScore();
    if (fun + 2 < 100) {
      fun += 2;
      updateScore(fun);
    } else {
      const remain = 100 - fun;
      updateScore(fun + remain);
    }
  }
};

const buttonClick = () => {
  document.querySelector('#funButton').addEventListener('click', funButtonFunc);
  document.querySelector('#littleFunButton').addEventListener('click', funButtonFunc);
};

export default buttonClick;
