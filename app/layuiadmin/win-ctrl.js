     // require('electron').ipcRenderer;
      // You can also require other files to run in this process

      require('../renderer.js')

var ipc = require('electron').ipcRenderer;
document.getElementById('maxbt').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-max');
 
})
document.getElementById('minbt').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-min');
 
})
document.getElementById('closebt').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-close');
 
})


var ipc = require('electron').ipcRenderer;
document.getElementById('maxbt1').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-max');
 
})
document.getElementById('minbt1').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-min');
 
})
document.getElementById('closebt1').addEventListener('click', () => {
  console.log('hello vscode!')
  ipc.send('window-close');
 
})