import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'

// CALENDAR
import VCalendar from 'v-calendar';

// FORMKIT
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

// Use plugin with defaults
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(VCalendar, {})

app.use(createPinia())
app.use(router)

const textClassification = {
    label: 'block text-primary text-md font-bold mb-2',
    input:
        'px-3 py-1 w-full text-lg font-source-sans-pro font-medium bg-white border-2 border-background mb-3',
}

app.use(
    plugin,
    defaultConfig({
        config: {
            classes: generateClasses({
                text: textClassification,
                number: textClassification,
                select: textClassification,
            }),
        },
    })
)

app.mount('#app')
