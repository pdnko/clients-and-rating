import type { GetClientResponse, GetClientsResponse } from '~/types/services/clientApi';

export default {
	async getClients() {
	  return await $fetch<GetClientsResponse>('https://reqres.in/api/users');
	},

	async getClient(id: number) {
		return await $fetch<GetClientResponse>(`https://reqres.in/api/users/${id}`);
	},
};
