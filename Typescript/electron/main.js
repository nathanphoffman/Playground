const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 600, height: 400 });
  win.loadFile("index.html");
  if (process.env.SMOKE) win.webContents.on("did-finish-load", () => app.quit()); // lets a script check it launches
});

app.on("window-all-closed", () => app.quit());
