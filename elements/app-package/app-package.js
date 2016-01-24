(() => {
  Polymer({
    is: 'app-package',

    properties: {
      name: String,
      version: String,
      installed: {
        type: Boolean,
        value: true,
        notify: false
      }
    },

    listeners: {
      'tap': '_tap'
    },

    _tap(evt) {
      var sourceEvent = evt.path[0];

      if (sourceEvent.tagName === 'BUTTON' && sourceEvent.getAttribute('data-action') === 'install') {
        //document.querySelector('app-shell').exec('')
      }
    }
  });
})();
