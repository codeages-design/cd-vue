import Alert from './components/alert';
import Badge from './components/badge';

const components = {
  Alert,
};

// 遍历注册组件
Object.keys(components).map((item) => {
  Vue.component(item.name, item);
});


module.exports = {
  version: process.env.version,
  ...components
}
