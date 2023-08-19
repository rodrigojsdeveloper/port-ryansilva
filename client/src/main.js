<<<<<<< HEAD
/* istanbul ignore file */
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)

app.component(
  'components',
  {}
)

app.use(router)
app.mount('#app')
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> fb18888 (Chore: Configurando ambiente)
