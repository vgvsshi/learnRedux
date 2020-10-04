export default class Base {
	_apiBase = 'http://localhost:3000';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`)
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`);
		}
		return await res.json();
	}
	async getProducts() {
		return await this.getResource('/products/');
	}

	async getCategoryList() {
		return await this.getResource('/categoryList/');
	}

}