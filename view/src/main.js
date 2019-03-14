import Vue from 'vue'
import App from './App'
import router from './router'
import myPlugin from '../plugins/pluginTest'
Vue.use(myPlugin, { name: 'RCMyPLugin'});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
