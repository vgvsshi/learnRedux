const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

//Middlewares
app.use(express.json({ extended: true }))

//Routes
app.use('/api/auth', require('./routes/auth-routes'))
app.use('/api/products', require('./routes/product-routes'))

//Server Port
const PORT = config.get('port') || 5000

//Start server
async function start() {
	try {
		//Connect to MongoDB
		await mongoose.connect(config.get('mongoURI'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})

		app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}...`))
	} catch (e) {
		console.log('Server error', e.message)
		process.exit(1)
	}
}
start()