const Base = () => {
	const _apiBase = 'http://localhost:3000';

	async function getResource(url) {
		const res = await fetch(`${_apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`);
		}
		return await res.json();
	}

	async function getProducts() {
		return await getResource('/products/');
	}

	async function getCategoryList() {
		return await getResource('/categoryList/');
	}

}

export default Base;