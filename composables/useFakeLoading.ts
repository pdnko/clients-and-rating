export function useFakeLoading() {
	const loading = ref(false);

	async function startLoading() {
		loading.value = true;

		await new Promise<void>((resolve) => {
			setTimeout(() => {
				loading.value = false;
				resolve();
			}, 2000);
		});
	};

	return {
		loading,
		startLoading,
	};
}
