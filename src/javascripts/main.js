import '../styles/main.scss';
import buttonHandleEvent from './components/form/eat';
import buttonClick from './components/form/play';
import strengthHandleEvent from './components/form/fight';
import sleepHandleEvent from './components/form/sleep';
import pageBuilder from './components/pageBuilder';

const init = () => {
  pageBuilder();
  buttonClick();
  buttonHandleEvent();
  strengthHandleEvent();
  sleepHandleEvent();
};

init();
