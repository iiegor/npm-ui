'use strict';

(() => {
  const remote = require('electron').remote;
  const BrowserWindow = remote.getCurrentWindow();

  Polymer({
    is: 'app-topbar',

    openFolder() {
      this.$['input-folder'].click();
    },

    handleExit() {
      remote.app.quit();
    },

    handleMaximize() {
      if (!BrowserWindow.isMaximized()) {
        BrowserWindow.maximize();
      } else {
        BrowserWindow.restore();
      }
    },

    handleMinimize() {
      BrowserWindow.minimize();
    }
  });
})();
