# CSA-Monitor

Javascript: 框架 - Vue.js, Chart - EChart

*Webpack, Grunt, Eslint, Jasmine, SASS/**LESS**, TravisCI, ES6*


Plugins
----
We will create several small plugins for this tool, include:

### Dialog:
\#1. Add dialog tag in html
``` html
<m-dialog></m-dialog>
```

\#2. Import 'Dialog' plugin, set init config and show it.
``` javascript
import {Dialog} from '../plugins/dialog';
Dialog.init({
  title: 'TEST TITLE',
  body: '<i>THIS DIALOG BODY</i>'
}).show();

// Dynamic update dialog title, body etc.
Dialog.title = 'TITLE UPDATE';

```

### Tooltip:
\#1. Import 'Tooltip' plugin, use it as a plugin.
``` javascript
import {Tooltip} from '../plugins/tooltip';
Vue.use(Tooltip);
```

\#2. Add v-tooltip directive to html tags.
``` html
<p v-tooltip="{title: 'Lorem ipsum aliquam habitasse curae feugiat fames suscipit adipiscing senectus, orci non nec leo pharetra etiam metus libero lacus, taciti consequat class augue interdum aliquet integer id.'}">Lorem ipsum venenatis praesent maecenas mattis gravida.</p>
```
