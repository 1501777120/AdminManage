import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../public/css/bass.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../public/css/fonts/iconfont.css"
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
