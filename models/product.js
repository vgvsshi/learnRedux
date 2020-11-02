const { Schema, model } = require('mongoose')

const schema = new Schema({
	title: { type: String, required: true, unique: true },
	price: { type: Number, required: true },
	img: String,
	category: { type: String, required: true }
})

module.exports = model('Product', schema)