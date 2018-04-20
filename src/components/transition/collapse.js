import { 
  setStyle,
  addClass,
  removeClass
} from '../../utils/dom';
import { prefix } from '../../utils';

const TRANSITION_NAME = 'collapse-transition';

const transition = {
  beforeEnter(el) {
    setStyle(el, 'height', '0px');
    addClass(el, TRANSITION_NAME);
  },
  enter(el) {
    setStyle(el, 'overflow', 'hidden');
    setStyle(el, 'height', el.scrollHeight + 'px');
  },
  afterEnter(el) {
    removeClass(el, TRANSITION_NAME);

    setStyle(el, 'height', null);
    setStyle(el, 'overflow', null);
  },
  beforeLeave(el) {
    setStyle(el, 'height', el.scrollHeight + 'px');
    setStyle(el, 'overflow', 'hidden');
  },
  leave(el) {
    addClass(el, TRANSITION_NAME);

    setStyle(el, 'scrollHeight', el.scrollHeight);
    setStyle(el, 'height', 0);
  },
  afterLeave(el) {
    removeClass(el, TRANSITION_NAME);

    setStyle(el, 'height', null);
    setStyle(el, 'overflow', null);
  }
}

const prefixClass = `${prefix}-collapse-transition`;

export default {
  name: prefixClass,
  functional: true,
  render(h, context) {
    const data = {
      on: transition
    };

    return h('transition', data, context.children);
  }
}