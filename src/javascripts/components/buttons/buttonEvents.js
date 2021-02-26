import buttonFunc from '../form/eat';

const buttonHandleEvent = () => {
  document.querySelector('#healthyButton').addEventListener('click', buttonFunc);
  document.querySelector('#badButton').addEventListener('click', buttonFunc);
};

export default buttonHandleEvent;
