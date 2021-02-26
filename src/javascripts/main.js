import '../styles/main.scss';
import { eatBuilder, buttonHandleEvent } from './components/form/eat';
import { playBuilder, buttonClick } from './components/form/play';
import { fightBuilder, strengthHandleEvent } from './components/form/fight';
import { sleepBuilder, sleepHandleEvent } from './components/form/sleep';
import domStringBuilder from './components/domStringBuilder';

const init = () => {
  eatBuilder();
  playBuilder();
  fightBuilder();
  sleepBuilder();
  domStringBuilder();
  buttonClick();
  buttonHandleEvent();
  strengthHandleEvent();
  sleepHandleEvent();
};

init();
