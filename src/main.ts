import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from "element-plus/lib/locale/lang/zh-cn";//国际化
import 'element-plus/dist/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn }).use(VueAwesomeSwiper).use(router).mount('#app')
