const Base = () => {
	_apiBase = 'http://localhost:3000';

	async const getResource = (url) => {
		const res = await fetch(`${_apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`);
		}
		return await res.json();
	}

	async const getProducts = () => {
		return await getResource('/products/');
	}

	async const getCategoryList = () => {
		return await getResource('/categoryList/');
	}

}