const initialState = {
	categoryList: [],
	productList: [],
	items: [],
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
		case 'ITEM_ADD_TO_CARD':
			const newItem = state.productList.find(item => item.id === action.payload);
			if (state.items.findIndex(item => item.id === newItem.id) !== -1) {
				const clone = state.items.find(item => item.id === newItem.id)
				const newCart = state.items.filter(item => item.id !== newItem.id);
				clone.amount = clone.amount + 1
				newCart.push(clone);
				return {
					...state,
					items: newCart
				};
			}
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
		default:
			return state;
	}
}

export default reducer;

