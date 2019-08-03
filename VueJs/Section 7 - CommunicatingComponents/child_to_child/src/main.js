import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
