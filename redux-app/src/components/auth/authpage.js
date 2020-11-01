import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'

export const AuthPage = () => {
	const [form, setForm] = useState({ email: "", password: "" })

	const { loading, request } = useHttp()

	const changeHadler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', { ...form })
			console.log('Data', data)
		} catch (e) { }
	}

	return (
		<div className='row'>
			<div className='col s6 offset-s3'></div>
			<h1>Auth Page</h1>
			<div className="card green darken-3">
				<div className="card-content white-text">
					<span className="card-title">Авторизация</span>
					<div>
						<div className="input-field">
							<input placeholder="Введите Email" id="email" type="email" name="email" className="validate yellow-input" onChange={changeHadler} />
							<label htmlFor="first_name">Email</label>
						</div>
						<div className="input-field">
							<input placeholder="Введите пароль" id="password" type="password" name="password" className="validate yellow-input" onChange={changeHadler} />
							<label htmlFor="first_name">Пароль</label>
						</div>
					</div>
				</div>
				<div className="card-action">
					<button className='btn yellow darken-4' onClick={registerHandler} disabled={loading} >Войти</button>
					<button className='btn grey lighten-1 black-text' style={{ marginLeft: "20px" }} onClick={registerHandler} disabled={loading}>Регистрация</button>
				</div>
			</div>
		</div>
	)
}

export default AuthPage