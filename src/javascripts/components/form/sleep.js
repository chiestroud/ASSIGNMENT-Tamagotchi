const sleepBuilder = () => {
  document.querySelector('#sleep').innerHTML = `<div class="sleep pt-2">
                                                <div class="mb-2">Let's SLEEP</div>
                                                 <img class="sleepImg" src="https://i.gzn.jp/img/2015/07/12/tamagotch-apple-watch/s86.png" alt="sleep">
                                                <p id="energy" class="mt-2">50</p>
                                                <div class="buttons pb-3">
                                                  <button class="btn btn-success" id="napButton">Nap</button>
                                                  <button class="btn btn-success" id="slumberButton">Deep Sleep</button>
                                                </div>
                                                </div>`;
};

const getSleep = () => {
  const initialSleep = document.querySelector('#energy').innerHTML;
  return Number(initialSleep);
};

const updateSleep = (newScore) => {
  document.querySelector('#energy').innerHTML = newScore;
};

const sleepButton = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'napButton') {
    let energy = getSleep();
    if (energy + 50 < 100) {
      energy += 50;
      updateSleep(energy);
    } else {
      const remain = 100 - energy;
      updateSleep(energy + remain);
    }
  }
  if (buttonId === 'slumberButton') {
    let energy = getSleep();
    if (energy + 60 < 100) {
      energy += 60;
      updateSleep(energy);
    } else {
      const remain = 100 - energy;
      updateSleep(energy + remain);
    }
  }
};

const sleepHandleEvent = () => {
  document.querySelector('#napButton').addEventListener('click', sleepButton);
  document.querySelector('#slumberButton').addEventListener('click', sleepButton);
};

export { sleepBuilder, sleepHandleEvent };
