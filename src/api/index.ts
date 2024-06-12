import type { VueQueryPluginOptions } from '@tanstack/vue-query';
import { QueryClient } from '@tanstack/vue-query';

export const queryClient = new QueryClient();
export const vueQueryPluginOptions: VueQueryPluginOptions = {
	queryClient,
};
