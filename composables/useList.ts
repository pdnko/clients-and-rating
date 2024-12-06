import { View, type ListView } from '~/types/list';

export function useList() {
	const listView = useState<ListView>('listView', () => View.Clients);
	const views: ListView[] = [View.Clients, View.Rating];

	function switchListView(to: View) {
		listView.value = to;
	}
	
	return {
		views,
		listView,
		switchListView,
	};
}
