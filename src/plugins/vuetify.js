/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Skadi
 * @Date: 2021-07-05 08:48:49
 * @LastEditTime: 2021-07-19 10:32:21
 */
import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)
Vue.component("v-snackbar", VSnackbar);
Vue.component("v-btn", VBtn);
Vue.component("v-icon", VIcon);
let dark = localStorage.getItem('dark')
const opts = {
  theme: {
    dark: dark,
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#009688',
        accent: '#9c27b0',
        error: '#e91e63',
        warning: '#f44336',
        info: '#03a9f4',
        success: '#4caf50',

        toolbar: '#D6D6D6',
        dialog: '#f5f5f5',
        btn: colors.blue.darken1,

        green: colors.green.darken4,
        orange: colors.orange.darken4,
        purple: colors.purple.darken4
      },
      dark: {
        primary: colors.purple.lighten2,

        btn: colors.blueGrey.darken3,
        dialog: colors.blueGrey.darken3,

        green: colors.green.lighten2,
        orange: colors.orange.lighten2,
        purple: colors.purple.lighten3
      }
    }
  }
}
var vuetify = new Vuetify(opts)
vuetify.options = opts
export default vuetify