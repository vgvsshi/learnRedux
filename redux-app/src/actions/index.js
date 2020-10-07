const productLoaded = (newProduct) => {
	return {
		type: "PRODUCT_LOADED",
		list: newProduct
	};
};

const categoryLoaded = (newProduct) => {
	return {
		type: "CATEGORY_LOADED",
		list: newProduct
	};
};

const addedToCard = (id) => {
	return {
		type: 'ITEM_ADD_TO_CARD',
		payload: id
	};
};

const addedToCardWithAmount = (id, amount) => {
	return {
		type: 'ITEM_ADD_TO_CARD_WITH_AMOUNT',
		payload: id,
		amount: amount
	};
};


const deleteFromCard = (id) => {
	return {
		type: 'ITEM_REMOVE_FROM_CARD',
		payload: id
	};
};

const incAmount = (id) => {
	return {
		type: 'AMOUNT_INC',
		payload: id
	};
};

const decAmount = (id) => {
	return {
		type: 'AMOUNT_DEC',
		payload: id
	};
};

export {
	productLoaded,
	addedToCard,
	deleteFromCard,
	incAmount,
	decAmount,
	categoryLoaded
};