import './assets/styles/layout.css';
import './assets/styles/main.css';
import './assets/styles/typography.css';
import './assets/styles/variables.css';
import 'primeicons/primeicons.css';
import './utils/utils';
import './models/frontend/AccountsReceivableListModel';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primeuix/themes';
import { registerPrimeVueComponents } from './plugins/primevue';

import App from './App.vue';
import router from './router/router';

const MyPreset = definePreset(Aura, {
  components: {
    panelmenu: {
      panel: {
        background: 'var(--p-sky-900)',
        borderColor: 'hsl(var(--primary-dark))',
        color: 'hsl(var(--text-on-dark))',
      },
      item: {
        color: 'hsl(var(--text-on-dark))',
        focusBackground: 'hsl(var(--primary-dark))',
        focusColor: 'hsl(var(--text-on-dark))',
        icon: {
          color: 'hsl(var(--text-on-dark))',
          focusColor: 'hsl(var(--text-on-dark))',
        }
      }
    }
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset
  }
});
registerPrimeVueComponents(app);

app.mount('#app');
