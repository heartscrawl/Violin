// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const os = require('os')
const path = require('path')

const { menubar } = require('menubar');

const mb = menubar({
    icon: path.join(__dirname, 'icons', 'on.png'),
    tooltip: "Violin",
    browserWindow: {
        y: 40,
        width: 360,
        height: 600
    }
});

mb.on('ready', () => {
  console.log('app is ready');

  mb.showWindow();
  // your app code here
});
