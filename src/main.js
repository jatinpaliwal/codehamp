// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.use(Vuesax, {
    theme: {
      colors: {
        primary: '#5b3cc4',
        success: '#4fc08d',
        danger: 'rgb(242, 19, 93)',
        warning: 'rgb(255, 130, 0)',
        dark: '#f7df1e',
      }
    }
  })
}

