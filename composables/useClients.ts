import type { Client } from '~/types/client';

import clientApi from '~/services/clientApi';

export function useClients() {
	const clients = useState<Client[]>('clients', () => []);

	const {
		status,
		error,
		execute: fetchClients,
	} = useLazyAsyncData(() => clientApi.getClients().then((res) => {
		return clients.value = res.data || [];
	}));

	return {
		clients,
		status,
		error,
		fetchClients,
	};
}
