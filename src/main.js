import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
import message from 'vuetify-message-snackbar';
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(message, {
	autoRemove: true,
	closeButtonContent: 'CLOSE',
	offsetTop: 10,
	autoTransitionSetting: true,
	class: 'margin-top-animation',
	// 预设icon
	presetIcon: {
		success: 'mdi-checkbox-marked-circle'
	},
  options: vuetify.options
  
})