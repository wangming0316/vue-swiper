import { createApp } from 'vue'
import lodash from 'lodash-es'
import { createPinia } from 'pinia'
import App from './App.vue'
function SecretPiniaPlugin() {
    return { secret: 'the cake is a lie' }
}
const app = createApp(App);
const pinia = createPinia()
pinia.use(SecretPiniaPlugin);
// 上文示例
pinia.use(({ store }) => {
    store.hello = 'world'
   
})

app.use(pinia)
app.mount('#app')
