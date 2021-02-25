const domBuilder = () => {
  const full = 100;
  document.querySelector('#eat').innerHTML = `<div>Let's EAT</div>
                                                <p>${full}</p>
                                                <button>Healthy Food</button>
                                                <button>Unhealthy Food</button>`;
  const fun = 50;
  document.querySelector('#play').innerHTML = `<div>Let's PLAY</div>
                                                <p>${fun}</p>
                                                <button>Super Fun</button>
                                                <button>Slightly Fun</button>`;
  const strength = 100;
  document.querySelector('#fight').innerHTML = `<div>Let's FIGHT</div>
                                                  <p>${strength}</p>
                                                  <button>Run Away (bravely)</button>
                                                  <button>Violence</button>`;
  const energy = 50;
  document.querySelector('#sleep').innerHTML = `<div>Let's SLEEP</div>
                                                <p>${energy}</p>
                                                <button>Nap (bravely)</button>
                                                <button>Deep Slumber</button>`;
};

export default domBuilder;
