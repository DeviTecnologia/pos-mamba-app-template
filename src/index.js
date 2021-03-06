/**
 * Boot the actual app into the `app-root` element.
 * * Modify this file only if you know what you are doing.
 */
import App from './App.html';
import store from './store.js';

if (__DEV__) {
  window.MambaStore = store;
}

export default new App({
  target: document.getElementById('app-root'),
  store,
});
