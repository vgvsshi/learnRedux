const productLoaded = (newProduct) => {
	return {
		type: "PRODUCT_LOADED",
		list: newProduct
	};
};

const addedToCard = (id) => {
	return {
		type: 'ITEM_ADD_TO_CARD',
		payload: id
	};
};

const deleteFromCard = (id) => {
	return {
		type: 'ITEM_REMOVE_FROM_CARD',
		payload: id
	};
};

const updateCartQuantity = (productId, quantity) => {
	return {
		type: 'UPDATE_CART_QUANTITY',
		payload: {
			productId,
			quantity: quantity
		}
	}
};

export {
	productLoaded,
	addedToCard,
	deleteFromCard,
	updateCartQuantity
};