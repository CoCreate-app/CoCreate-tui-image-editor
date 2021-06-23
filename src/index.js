import ImageEditor from 'tui-image-editor';
//import FileSaver from 'file-saver'; //to download edited image to local. Use after npm install file-saver
//const ImageEditor = require('tui-image-editor');

const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
  includeUI: {
    loadImage: {
      path: '../img/1.jpg',
      name: 'SampleImage',
    },
    initMenu: 'filter',
    menuBarPosition: 'bottom',
  },
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70,
  },
});