const eatBuilder = () => {
  document.querySelector('#eat').innerHTML = `<div class="eat pt-2">
                                                <div class="mb-2">Let's EAT</div>
                                                <img class="eatImg" src="https://blogimg.goo.ne.jp/user_image/19/ba/353643b83a9adb6345718a86cc2dd08c.jpg">
                                                <p id="full" class="mt-2">100</p>
                                                <div class="buttons pb-3">
                                                  <button class="btn btn-primary" id="healthyButton">Healthy Food</button>
                                                  <button class="btn btn-primary" id="badButton">Bad Food</button>
                                                </div>
                                              </div>`;
};

const getScore = () => {
  const full = document.querySelector('#full').innerHTML;
  return Number(full);
};

const updateScore = (newScore) => {
  document.querySelector('#full').innerHTML = newScore;
};

const buttonFunc = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'healthyButton') {
    let full = getScore();
    if (full + 10 < 100) {
      full += 10;
      updateScore(full);
    } else {
      const remain = 100 - full;
      updateScore(full + remain);
    }
  }
  if (buttonId === 'badButton') {
    let full = getScore();
    full -= 3;
    updateScore(full);
  }
};

const buttonHandleEvent = () => {
  document.querySelector('#healthyButton').addEventListener('click', buttonFunc);
  document.querySelector('#badButton').addEventListener('click', buttonFunc);
};

export { eatBuilder, buttonHandleEvent };
