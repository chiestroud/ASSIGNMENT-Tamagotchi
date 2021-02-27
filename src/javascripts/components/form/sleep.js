let energy = 50;

const getSleep = () => {
  energy = document.querySelector('#energy').innerHTML;
  return Number(energy);
};

const updateSleep = (newScore) => {
  document.querySelector('#energy').innerHTML = newScore;
};

const sleepButton = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'napButton') {
    energy = getSleep();
    if (energy + 50 < 100) {
      energy += 50;
      updateSleep(energy);
    } else {
      const remain = 100 - energy;
      updateSleep(energy + remain);
    }
  }
  if (buttonId === 'slumberButton') {
    energy = getSleep();
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

export default sleepHandleEvent;
