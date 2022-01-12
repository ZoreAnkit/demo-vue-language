import Vue from 'vue'
import App from './App.vue'
import languagePlugin from "ankit-vue-language-lib"
import store from './store/index'
import en from './language/en'
import fr from './language/fr'

Vue.config.productionTip = false

Vue.use(languagePlugin, store, { 'en': en, 'fr': fr })
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
