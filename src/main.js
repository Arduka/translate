/*
 * @Author: zplu zplu@iflytek.com
 * @Date: 2023-10-24 19:45:13
 * @LastEditors: zplu zplu@iflytek.com
 * @LastEditTime: 2023-10-25 20:54:55
 * @FilePath: \translate\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/translate.css'
import './assets/translate-box.css'
import './assets/translate-text.css'

const app = createApp(App)

app.use(router)
app.use(ElementUI)

app.mount('#app')
