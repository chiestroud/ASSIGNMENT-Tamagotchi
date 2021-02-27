import buttonFunc from '../form/eat';
import strengthButton from '../form/fight';
import sleepButton from '../form/sleep';
import funButtonFunc from '../form/play';

const buttonHandleEvent = () => {
  document.querySelector('#healthyButton').addEventListener('click', buttonFunc);
  document.querySelector('#badButton').addEventListener('click', buttonFunc);
  document.querySelector('#runButton').addEventListener('click', strengthButton);
  document.querySelector('#violenceButton').addEventListener('click', strengthButton);
  document.querySelector('#napButton').addEventListener('click', sleepButton);
  document.querySelector('#slumberButton').addEventListener('click', sleepButton);
  document.querySelector('#funButton').addEventListener('click', funButtonFunc);
  document.querySelector('#littleFunButton').addEventListener('click', funButtonFunc);
};

export default buttonHandleEvent;
