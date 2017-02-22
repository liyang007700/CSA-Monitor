# CSA-Monitor

Javascript: 框架 - Vue.js, Chart - EChart

*Webpack, Grunt, Eslint, Jasmine, SASS/**LESS**, TravisCI, ES6*

Widgets
----
We will create several small widgets for this tool, includ:

#### Dialog
```
import {Dialog} from '../widgets/dialog';
Dialog.init({
  title: 'TEST NOTIFICATION',
  body: '<i>GET /test-slow-crash-gateway</i>'
}).show();

```
