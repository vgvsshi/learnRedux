const { Router } = require('express')
const config = require('config')
const Product = require('../models/product')
const { check, validationResult } = require('express-validator')
const router = Router()

router.post(
	'/addProduct',
	[
		check('title', 'Минимальная длина названия 6 символов').isLength({ min: 4, max: 56 }),
		check('price', 'Введите корректную цену').isNumeric(),
		check('img', 'Введите корректную цену').isURL(),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array(), message: 'Некорректные данные при добавлении товара' })
			}

			const { title } = req.body

			const candidate = await Product.findOne({ title })

			if (candidate) {
				res.status(400).json({ message: 'Товар с таким названием уже существует' })
				return
			}

			const product = new Product({
				title: req.body.title,
				price: req.body.price,
				img: req.body.img,
				category: req.body.category
			})
			await product.save()
			res.status(201).json({ message: 'Пользователь создан' })
		} catch (e) {
			console.log(req.body)
			console.log(e.message)
			res.status(500).json({ message: "Что-то пошло не так, попробуйте снова." })
		}
	})

router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.json(products)
	} catch (e) {
		res.status(500).json({ message: "Что-то пошло не так, попробуйте снова." })
	}
})

router.get('/:id', async (req, res) => {
	try {
		const products = await Product.findById(req.params.id)
		res.json(products)
	} catch (e) {
		res.status(500).json({ message: "Что-то пошло не так, попробуйте снова." })
	}
})

module.exports = router