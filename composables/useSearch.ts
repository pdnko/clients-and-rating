export function useSearch() {
	const search = useState<string>('search', () => '');

	function updateSearch(value: string) {
		search.value = value;
	}

	function clearSearch() {
		search.value = '';
	}

	return {
		search,
		updateSearch,
		clearSearch,
	};
}
