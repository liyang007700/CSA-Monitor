/*jshint esversion: 6 */
import template from '../../templates/calendar/Dialog.html';
let Dialog = {};

Vue.component('m-dialog', {
    props: ['title', 'body'],
    template: template,
    data: function() {
        return {
            showDialog: true
        };
    },
    methods: {
        close: function() {
            this.$data.showDialog = false;
        }
    },
    created: function() {

    },
    mounted: function() {
        console.log("Dialog Mounted!");
        Dialog.show = () => {
            this.$data.showDialog = true;
        };

        Dialog.hide = () => {
            this.$data.showDialog = false;
        };
    }
});

export {
    Dialog
};
