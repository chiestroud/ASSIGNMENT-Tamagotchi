const playBuilder = () => {
  document.querySelector('#play').innerHTML = `<div class="play pt-2">
                                                <div class="mb-2">Let's PLAY</div>
                                                <img class="playImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV7V11hQkDdvdjOt2GAVYx64Hr-ISLO5fYQ&usqp=CAU" alt="play">
                                                <p id="fun" class="mt-2">50</p>
                                                <div class="buttons pb-3">
                                                  <button class="btn btn-warning" id="funButton">Super Fun</button>
                                                  <button class="btn btn-warning" id="littleFunButton">Slightly Fun</button>
                                                </div>
                                                </div>`;
};

const getFunScore = () => {
  const fun = document.querySelector('#fun').innerHTML;
  return Number(fun);
};

const updateScore = (newScore) => {
  document.querySelector('#fun').innerHTML = newScore;
};

const funButtonFunc = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'funButton') {
    let fun = getFunScore();
    if (fun + 50 < 100) {
      fun += 50;
      updateScore(fun);
    } else {
      const remain = 100 - fun;
      updateScore(fun + remain);
    }
  }
  if (buttonId === 'littleFunButton') {
    let fun = getFunScore();
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

export { playBuilder, buttonClick };
