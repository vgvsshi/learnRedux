const initialState = {
	categoryList: [],
	productList: []
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
	}
}

export default reducer;

