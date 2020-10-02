const initialState = {
	categoryList: [],
	productList: [],
	items: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "PRODUCT_LOADED":
			return {
				...state,
				productList: action.list
			};
		case "CATEGORY_LOADED":
			return {
				...state,
				categoryList: action.list
			};
		default:
			return state;
		case 'ITEM_ADD_TO_CARD':
			const id = action.payload;
			const item = state.productList.find(item => item.id === id);
			const newItem = {
				title: item.title,
				price: item.price,
				url: item.url,
				id: item.id
			};
			return {
				...state,
				items: [
					...state.items,
					newItem
				]
			};
		case 'ITEM_REMOVE_FROM_CARD':
			const idx = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === idx);
			return {
				...state,
				items: [
					...state.items.slice(0, itemIndex),
					...state.items.slice(itemIndex + 1)
				]
			}
	}
}

export default reducer;

