import Row from './components/row';
import Col from './components/col';
import Icon from './components/icon';
import VMenu from './components/v-menu';
import VSubmenu from './components/v-submenu';
import Sidebar from './components/sidebar';
import Step from './components/step';
import Steps from './components/steps';
import Panel from './components/panel';
import Alert from './components/alert';
import CollapseTransition from './components/collapse-transition';

import message from './components/message';

import pkg from '../package.json';

const components = {
  Row,
  Col,
  Icon,
  VMenu,
  VSubmenu,
  Sidebar,
  Step,
  Steps,
  Panel,
  Alert,
  CollapseTransition
};

const install = (Vue, options = {}) => {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
  
  Vue.prototype.$message = message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = Object.assign({}, {
  version: pkg.version,
  install,
}, components);

export default API;