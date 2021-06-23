import ImageEditor from 'tui-image-editor';
import FileSaver from 'file-saver'; //to download edited image to local. Use after npm install file-saver
import blackTheme from 'tui-image-editor/js/theme/black-theme.js';
const locale_ru_RU = {
  // override default English locale to your custom
  Crop: 'Обзрезать',
  'Delete-all': 'Удалить всё',
  // etc...
};
const CoCreateTuiImage = new ImageEditor(document.querySelector('#tui-image-editor'), {
  includeUI: {
    loadImage: {
      path: 'img/sampleImage.jpg',
      name: 'SampleImage',
    },
    locale: locale_ru_RU,
    theme: blackTheme, // or whiteTheme
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


export default CoCreateTuiImage;