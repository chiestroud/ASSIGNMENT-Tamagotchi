const fightBuilder = () => {
  document.querySelector('#fight').innerHTML = `<div class="fight pt-2">
                                                  <div class="mb-2">Let's FIGHT</div>
                                                  <img class="fightImg" src="http://d13n9ry8xcpemi.cloudfront.net/photo/odai/400/db6ee76ec19d443ff3b38dae1356ad37_400.jpg" alt="fight">
                                                  <p id="strength" class="mt-2">100</p>
                                                  <div class="buttons pb-3">
                                                    <button class="btn btn-danger" id="runButton">Run Away</button>
                                                    <button class="btn btn-danger" id="violenceButton">VIOLENCE</button>
                                                  </div>
                                                  </div>`;
};

const getStrength = () => {
  const initialStrength = document.querySelector('#strength').innerHTML;
  return Number(initialStrength);
};

const updateStrength = (newScore) => {
  document.querySelector('#strength').innerHTML = newScore;
};

const strengthButton = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'runButton') {
    let strength = getStrength();
    if (strength + 1 < 100) {
      strength += 1;
      updateStrength(strength);
    } else {
      const remain = 100 - strength;
      updateStrength(strength + remain);
    }
  }
  if (buttonId === 'violenceButton') {
    let strength = getStrength();
    strength -= 10;
    updateStrength(strength);
  }
};

const strengthHandleEvent = () => {
  document.querySelector('#runButton').addEventListener('click', strengthButton);
  document.querySelector('#violenceButton').addEventListener('click', strengthButton);
};

export { fightBuilder, strengthHandleEvent };
