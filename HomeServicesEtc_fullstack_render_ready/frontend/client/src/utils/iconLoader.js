// src/utils/iconLoader.js

// Webpack's require.context will scan the folder at build time
const icons = require.context('../assets/icons/categories', false, /\.png$/);

const iconMap = {};
icons.keys().forEach((fileName) => {
  // fileName looks like: './handyman-general-repairs.png'
  const key = fileName.replace('./', '').replace('.png', '');
  iconMap[key] = icons(fileName);
});

export default iconMap;