import renderProducts from './components/fetch-data.js';
import infiniteScroll from './components/infinite-scroll.js'
const $observe = document.getElementById('observe');
window.addEventListener('load', renderProducts);
window.addEventListener('scroll', infiniteScroll, {passive: false});