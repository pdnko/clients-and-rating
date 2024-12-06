export function useSearch() {
	const search = useState<string>('search', () => '');

	function clearSearch() {
		search.value = '';
	}

	return {
		search,
		clearSearch,
	};
}
