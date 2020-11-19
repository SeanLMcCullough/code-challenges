import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faDotCircle,
  faCircle,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faDotCircle)
library.add(faCircle)
library.add(faCheckCircle)
library.add(faExclamationCircle)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
