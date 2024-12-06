export function useSidebar() {
	const isSidebarShown = useState('sidebar', () => true);

	function showSidebar() {
		isSidebarShown.value = true;
	}

	function hideSidebar() {
		isSidebarShown.value = false;
	}

	return {
		isSidebarShown,
		showSidebar,
		hideSidebar,
	};
}
