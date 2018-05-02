# Codeages Design Vue

a Web Design Language Based on the Vue version


### how to use ?

```js
import cdvue from 'cd-vue';
import 'cd-vue/dist/styles/index.css';

Vue.use(cdvue);
```

If you want to On-demand use? 

```bash
yarn add babel-plugin-import --dev
```

Then edit .babelrc:

```
"plugins": [
  ["import", {
    "libraryName": "cd-vue",
    "libraryDirectory": "src/components"
  }]
],
```

Then edit main.js

```js
import {
  Alert,
  Panel,
} from 'cd-vue';

Vue.component('cd-alert', Alert);
Vue.component('cd-panel', Panel);
```