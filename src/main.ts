import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/App.vue';
import router from '@/router';
import { vueQueryPluginOptions } from '@/api';

const app = createApp(App);

app.use(VueQueryPlugin, vueQueryPluginOptions).use(router);

app.mount('#app');
