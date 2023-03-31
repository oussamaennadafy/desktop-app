const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow()
{
    mainWindow = new BrowserWindow({
        x: 200,
        y: 100,
        minWidth: 1366,
        minHeight: 768,
        resizable: true,
        center: true,
    });
    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    mainWindow.on('closed', () => (mainWindow = null));
    // mainWindow.setMenuBarVisibility(false);

    // mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});

app.on('activate', () =>
{
    if (mainWindow === null)
    {
        createWindow();
    }
});
