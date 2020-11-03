import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'

export const AuthPage = () => {
	const auth = useContext(AuthContext)
	const [form, setForm] = useState({ email: "", password: "" })
	const { loading, request, error, clearError } = useHttp()
	const message = useMessage()

	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])

	const changeHadler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', { ...form })
			message(data.message)
		} catch (e) {
			form.password = ''
		}
	}

	const loginHandler = async () => {
		try {
			const data = await request('/api/auth/login', 'POST', { ...form })
			auth.login(data.token, data.userId)
			message(data.message)
		} catch (e) {
			form.password = ''
		}
	}

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	return (
		<div className='row'>
			<div className='col s6 offset-s3'></div>
			<h1>Auth Page</h1>
			<div className="card green darken-3">
				<div className="card-content white-text">
					<span className="card-title">Авторизация</span>
					<div>
						<div className="input-field">
							<input placeholder="Введите Email" id="email" type="email" name="email" className="validate yellow-input" onChange={changeHadler} value={form.email} />
							<label htmlFor="first_name">Email</label>
						</div>
						<div className="input-field">
							<input placeholder="Введите пароль" id="password" type="password" name="password" className="validate yellow-input" onChange={changeHadler} value={form.password} />
							<label htmlFor="first_name">Пароль</label>
						</div>
					</div>
				</div>
				<div className="card-action">
					<button className='btn yellow darken-4' onClick={loginHandler} disabled={loading} >Войти</button>
					<button className='btn grey lighten-1 black-text' style={{ marginLeft: "20px" }} onClick={registerHandler} disabled={loading}>Регистрация</button>
				</div>
			</div>
		</div>
	)
}

export default AuthPage