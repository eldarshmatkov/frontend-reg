// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lodash from 'lodash'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(lodash)
Vue.config.productionTip = false

const messages = {
  en: {
  	list: {
  		age: 'years | year | years'
  	},
    filter: {
      sort: 'Sort by',
      view: 'View',
      table: 'Table',
      preview: 'Preview',
      id: 'ID',
      name: 'Name',
      age: 'Age',
      ascending: 'Ascending',
      descending: 'Descending',
      placeholder: 'Enter Name/Surname'
    },
    header: {
    	main: 'Main',
    	about: 'About us',
    	whatever: 'Whatever'
    }
  },
  ru: {
  	list: {
  		age: 'лет | год | года'
  	},
    filter: {
      sort: 'Сортировка',
      view: 'Вид',
      table: 'Таблица',
      preview: 'Превью',
      id: 'ID',
      name: 'Имя',
      age: 'Возраст',
      ascending: 'По возрастанию',
      descending: 'По убыванию',
      placeholder: 'Введите Имя/Фамилию'
    },
    header: {
    	main: 'Главная',
    	about: 'О нас',
    	whatever: 'Что угодно'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ru', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  i18n
})