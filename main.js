console.log('main process...');

const { app, BrowserWindow } = require('electron')
const path = require("path");
const url = require("url");

let win;

const createWindow = () => {
  // Create the browser window.
  win = new BrowserWindow({ width: 400, height: 680, frame: false, show: false, transparent: true })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  //win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

  //only show when file have successfully loaded.
  win.on('ready-to-show', () => {
    win.show();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})