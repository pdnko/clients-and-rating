import type { ClientDetails } from '~/types/client';

const STORAGE_KEY = 'storage_points';

/** @LOCALSTORAGE
 * Composable for work with saved details about clients in localStorage 
 **/
export function useClientsStorage() {
	const items = ref<ClientDetails[]>(getItemsFromLocalStorage());

	function getItemsFromLocalStorage(): ClientDetails[] {
		const storedData = localStorage.getItem(STORAGE_KEY);

		return storedData ? JSON.parse(storedData) : [];
	}

	function updateLocalStorage() {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
	}

	function getItem(id: number) {
		return items.value.find((item) => item.id === id);
	}

	function addItem(newItem: ClientDetails) {
		items.value.push(newItem);
		updateLocalStorage();
	}

	function removeItem(id: number) {
		items.value = items.value.filter((item) => item.id !== id);
		updateLocalStorage();
	}

	function updateItem(id: number, updatedFields: Partial<Pick<ClientDetails, 'id'>>) {
		const item = items.value.find((item) => item.id === id);
		if (item) {
			Object.assign(item, updatedFields);
			updateLocalStorage();
		}
	}

	return {
		items,
		getItem,
		addItem,
		removeItem,
		updateItem,
	};
}
