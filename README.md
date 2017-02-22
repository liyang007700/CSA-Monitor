# CSA-Monitor

Javascript: 框架 - Vue.js, Chart - EChart

*Webpack, Grunt, Eslint, Jasmine, SASS/**LESS**, TravisCI, ES6*

Widgets
----
We will create several small widgets for this tool, includ:

### Dialog:
\#1. Add dialog tag in html
``` html
<m-dialog></m-dialog>
```

\#2. Import 'Dialog' component, set init config and show it.
``` javascript
import {Dialog} from '../widgets/dialog';
Dialog.init({
  title: 'TEST TITLE',
  body: '<i>THIS DIALOG BODY</i>'
}).show();

// Dynamic update dialog title, body etc.
Dialog.title = 'TITLE UPDATE';

```
