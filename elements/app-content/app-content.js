(() => {
  Polymer({
    is: 'app-content',

    properties: {
      packages: {
        type: Array,
        value: [],
        notify: true
      }
    }
  });
})();
