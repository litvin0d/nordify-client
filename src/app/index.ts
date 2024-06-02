import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/app/App.vue';
import router from '@/app/providers/router';

export const application = createApp(App).use(router).use(VueQueryPlugin);
