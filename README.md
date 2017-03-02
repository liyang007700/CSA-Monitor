# CSA-Monitor

Javascript: 框架 - Vue.js, Chart - EChart

*Webpack, Grunt, Eslint, Jasmine, SASS/**LESS**, TravisCI, ES6*


Plugins
----
We will create several small plugins for this tool, include:

### Dialog:
#### APIs:
-
##### Props:
| Option   | type   | Description                                           |
| :------- | :----  | :---                                                  |
| title    | String |  Set the dialog title, html code are supported        |
| body     | String |  Set the dialog content body, html code are supported |

##### Slot:
| Slot name | Description                                                                                |
|:---       |:----                                                                                       |
| body      | Set the dialog content body, this is useful when add child components or attach vue events |
**Note:** If set `body` slot, that `body` prop will not work.

##### Dialog static methods:
| Name | Description    |
|:---  |:---            | 
| show | display dialog |
| hide | hide dialog    |

Exp: 
``` javascript
Dialog.show();

```

-

\#1.1 Add dialog tag in html, without slot.
``` html
<m-dialog></m-dialog>
```

\#1.2. Import 'Dialog' plugin, pass `title`, `body` props.
``` javascript
import {Dialog} from '../plugins/dialog';
data: function () {
  return {
      title: 'Dialog 1',
      body: 'Dialog 1 body content'
  };
},
mounted: function(){
  // After mounted show the dialog, or set click a button show it.
  Dialog.show();
}

```
\#2.1 Add dialog tag in html, with slot.
``` html
<div slot="body">
  <button v-on:click="closeDialog">Click to close this dialog</button>
</div>
```
\#2.2 define `closeDialog` method.
``` javascript
methods: {
  closeDialog: function(){
    Dialog.hide();
  }
},
mounted: function(){
  // After mounted show the dialog, or set click a button show it.
  Dialog.show();
}
```


### Tooltip:
\#1. Import 'Tooltip'.
``` javascript
import {Tooltip} from '../plugins/tooltip';
```

\#2. Add v-tooltip directive to html tags.
``` html
<p v-tooltip="{title: 'Lorem ipsum aliquam habitasse curae feugiat fames suscipit adipiscing senectus, orci non nec leo pharetra etiam metus libero lacus, taciti consequat class augue interdum aliquet integer id.'}">Lorem ipsum venenatis praesent maecenas mattis gravida.</p>
```

### Tabs:
#### APIs:
-
##### Props:
| Option    | type   | Description             |
| :-------  | :----  | :---                    |
| tabsLabel | Array  |  Each tab's label name  |

**Note:** add `m-tabs` as tabs root, each tab's content in `m-tab` component.

Exp:
``` html
<m-tabs :tabsLabel="['Web Front-end deveploers', 'Web Services']">
  <m-tab>
    <p>Diam ipsum quis eu curabitur rhoncus nostra consequat, varius urna nunc ligula iaculis tellus dolor egestas, auctor risus hac pharetra eros laoreet habitant placerat augue ultrices arcu cras duis phasellus sit commodo.</p>
  </m-tab>
  <m-tab>
    <h2>Class nisl convallis.</h2>
    <p>Lorem ipsum aliquam quam imperdiet morbi suscipit lectus enim, diam tempor eleifend pellentesque condimentum donec eu ut donec, pharetra litora lectus id ut aenean class.</p>
  </m-tab>
</m-tabs>
```

``` javascript
import '../plugins/tabs';
```
