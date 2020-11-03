import React, { useState, useEffect } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'


const AddPage = () => {
	const { request, error, clearError } = useHttp()
	const [form, setForm] = useState({ title: "", price: "", img: "", category: "" })
	const message = useMessage()
	const changeHadler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}
	const addHandler = async () => {
		try {
			console.log(form)
			await request('/api/products/addProduct', 'POST', { ...form })
		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])
	useEffect(() => {
		window.M.updateTextFields()
	}, [])
	return (
		<div className="card green darken-3" style={{ padding: '2rem' }}>
			<div className='col s8 offset-s2'>
				<div className="input-field">
					<input placeholder="Введите название товара" id="title" type="text" name="title" className="validate" onChange={changeHadler} value={form.title} />
					<label htmlFor="first_name">Название товара</label>
				</div>
				<div className="input-field">
					<input placeholder="Введите цену" id="price" type="text" name="price" className="validate" onChange={changeHadler} value={form.price} />
					<label htmlFor="first_name">Цена товара</label>
				</div>
				<div className="input-field">
					<input placeholder="Введите ссылку на картинку товара" id="img" type="text" name="img" className="validate" onChange={changeHadler} value={form.img} />
					<label htmlFor="first_name">Ссылка на картинку</label>
				</div>
				<div className="input-field">
					<input placeholder="Введите категорию товара" id="category" type="text" name="category" className="validate" onChange={changeHadler} value={form.category} />
					<label htmlFor="first_name">Категория товара</label>
				</div>
			</div>
			<button className='btn yellow darken-4' onClick={addHandler} >Добавить продукт</button>
		</div>
	)
}

export default AddPage;