/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import {registerPlugins} from "./plugins"

// Components
import App from "./App.vue"

// Composables
import {createApp} from 'vue'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  console.error(err)
  console.info(info)
  console.debug(instance)
}

registerPlugins(app)

app.mount('#app')
