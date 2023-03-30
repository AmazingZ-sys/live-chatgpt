import { createI18n } from 'vue-i18n'
import en from '../locales/en';
import zh from '../locales/zh';


const message = {
  en,
  zh
}


const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  warnHtmlMessage: false,
  messages: message
})



export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(i18n);
})
