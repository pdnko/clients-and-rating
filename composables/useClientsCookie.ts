import type { ClientDetails } from '~/types/client';

const COOKIE_KEY = 'storage_points';

export function useClientsCookie() {
	const itemsCookie = useCookie<ClientDetails[]>(COOKIE_KEY, {
		default: () => [],
		maxAge: 60 * 60 * 24 * 365, //1year
	});

	function getItem(id: number) {
		return itemsCookie.value?.find((item) => item.id === id);
	}

	function addItem(newItem: ClientDetails) {
		if (itemsCookie.value) {
			itemsCookie.value.push(newItem);
		} else {
			itemsCookie.value = [newItem];
		}
	}

	function removeItem(id: number) {
		if (itemsCookie.value) {
			itemsCookie.value = itemsCookie.value.filter((item) => item.id !== id);
		}
	}

	function updateItem(id: number, updatedFields: Partial<Omit<ClientDetails, 'id'>>) {
		if (itemsCookie.value) {
			const item = itemsCookie.value.find((item) => item.id === id);
			if (item) {
				Object.assign(item, updatedFields);
			}
		}
	}

	return {
		itemsCookie,
		getItem,
		addItem,
		removeItem,
		updateItem,
	};
}
