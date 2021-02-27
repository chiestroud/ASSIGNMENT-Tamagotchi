let strength = 100;

const getStrength = () => {
  strength = document.querySelector('#strength').innerHTML;
  return Number(strength);
};

const updateStrength = (newScore) => {
  document.querySelector('#strength').innerHTML = newScore;
};

const strengthButton = (e) => {
  const buttonId = e.target.id;
  if (buttonId === 'runButton') {
    strength = getStrength();
    if (strength + 1 < 100) {
      strength += 1;
      updateStrength(strength);
    } else {
      const remain = 100 - strength;
      updateStrength(strength + remain);
    }
  }
  if (buttonId === 'violenceButton') {
    strength = getStrength();
    strength -= 10;
    updateStrength(strength);
  }
};

export default strengthButton;
