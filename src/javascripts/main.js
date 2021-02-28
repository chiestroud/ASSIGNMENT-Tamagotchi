import '../styles/main.scss';
import buttonHandleEvent from './components/button/buttonHandling';
import pageBuilder from './components/views/pageBuilder';

const init = () => {
  pageBuilder();
  buttonHandleEvent();
};

init();
