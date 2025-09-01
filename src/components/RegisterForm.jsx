import axios from 'axios';
import { useState } from 'react';
import { texts } from '../constants/texts';
import '../styles/registerForm.css';

export default function RegisterForm() {
	const [formData, setFormData] = useState({
		name: '',
		last_name: '',
		email: '',
		phone: '',
		password: '',
		confirm_password: '',
	});

	const [message, setMessage] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'https://flow.ecto.tools/webhook/79e12507-621e-4880-bb5a-9fd8c15a4b61',
				formData,
				{
					headers: {
						Authorization: '9fMD5VvEzQShteBFutyWw33f',
						'Content-Type': 'application/json',
					},
				},
			);

			if (response.status === 200) {
				setMessage(' Formulário enviado com sucesso!');
			} else {
				setMessage(` Erro ao enviar. Código: ${response.status}`);
			}
		} catch (error) {
			setMessage(` Erro: ${error.response?.status || error.message}`);
		}
	};

	return (
		<div className="form-content">
			<img
				className="custon-icon"
				src="./src/assets/keyIcon.svg"
				alt="criar nova conta"
			/>
			<div className="form-header">
				<h1>{texts.createAccount}</h1>
				<p>{texts.fillForm}</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="form-fields"
			>
				<div className="fields">
					<label htmlFor="name">Nome</label>
					<input
						className="name-input"
						type="text"
						name="name"
						placeholder="Escreva seu nome"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="fields">
					<label htmlFor="name">E-mail</label>
					<input
						className="email-input"
						type="email"
						name="email"
						placeholder="exemplo@email.com"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="fields">
					<label htmlFor="name">Telefone</label>
					<input
						className="phone-input"
						type="tel"
						name="phone"
						placeholder="+55 (00) 00000-0000"
						value={formData.phone}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="fields">
					<div className="field-group">
						<label htmlFor="password">Senha</label>
						<div className="input-with-btn">
							<input
								className="password-input"
								type={showPassword ? 'text' : 'password'}
								name="password"
								placeholder="**********"
								value={formData.password}
								onChange={handleChange}
								required
							/>
							<button
								type="button"
								className="toggle-password-btn"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? 'Esconder' : 'Mostrar'}
							</button>
						</div>
					</div>
					<div className="field-group">
						<label htmlFor="confirm_password">Confirme sua senha</label>
						<div className="input-with-btn">
							<input
								className="confirm-password-input"
								type={showConfirmPassword ? 'text' : 'password'}
								name="confirm_password"
								placeholder="**********"
								value={formData.confirm_password}
								onChange={handleChange}
								required
							/>
							<button
								type="button"
								className="toggle-password-btn"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? 'Esconder' : 'Mostrar'}
							</button>
						</div>
					</div>
				</div>
				<button
					className="submit-btn"
					type="submit"
				>
					Enviar
				</button>
				{message && <p className="message">{message}</p>}
			</form>
		</div>
	);
}
