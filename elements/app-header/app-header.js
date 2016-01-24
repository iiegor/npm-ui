'use strict';

(() => {
  Polymer({
    is: 'app-header',

    properties: {
      logo: {
        type: Boolean,
        value: false,
        notify: false
      }
    },

    search(evt) {
      if (evt.keyCode === 13 || typeof evt.keyCode === 'undefined') {
        let searchWords = this.$['search-input'].value;

        document.querySelector('app-content').packages = [
          {name: 'package-name', version: '1.0', installed: false},
          {name: 'browserify', version: '1.0', installed: true},
          {name: 'another-one', version: '1.0', installed: true},
          {name: 'watch', version: '1.0', installed: false}
        ];
      }
    }
  });
})();
