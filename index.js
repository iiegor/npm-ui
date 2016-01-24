(() => {
  const package = require('./package.json');
  const ipc = require('electron').ipcRenderer;
  const childProcess = require('child_process');

  window.onload = function() {
    document.body.classList.add(process.platform);
  }

  window.npm = {
    install: function(command, args, options, callback) {
      
    }
  }
  
  function init() {
    process.versions.app = package.version;

    ipc.on('blur', function() {
      document.body.classList.add('blur');
    });

    ipc.on('focus', function() {
      document.body.classList.remove('blur');
    });
  }

  init();
})();