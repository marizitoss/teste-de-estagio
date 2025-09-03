import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { texts } from '../../constants/texts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {
	CustomTextFieldStyles,
	FormContent,
	FormFields,
	FormHeader,
	Icon,
	InputWithBtn,
	Label,
	Message,
	PasswordRow,
	SubmitBtn,
	TogglePasswordBtn,
} from './styles';

const FormInput = ({ label, name, type = 'text', placeholder, value, onChange, onBlur, error }) => (
	<>
		<Label htmlFor={name}>{label}</Label>
		<TextField
			variant="outlined"
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			required
			fullWidth
			error={!!error}
			helperText={error}
			InputProps={{ style: { ...CustomTextFieldStyles, borderRadius: '6px' } }}
		/>
	</>
);

const PasswordInput = ({ label, name, value, onChange, onBlur, show, toggle, error }) => (
	<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
		<Label htmlFor={name}>{label}</Label>
		<InputWithBtn>
			<TextField
				variant="outlined"
				type={show ? 'text' : 'password'}
				name={name}
				placeholder="••••••••••"
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				required
				fullWidth
				error={!!error}
				helperText={error}
				InputProps={{ style: { ...CustomTextFieldStyles, borderRadius: '6px 0 0 6px' } }}
			/>
			<TogglePasswordBtn
				type="button"
				onClick={toggle}
			>
				{show ? 'Esconder' : 'Mostrar'}
			</TogglePasswordBtn>
		</InputWithBtn>
	</Box>
);

export default function RegisterForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
		confirm_password: '',
	});

	const [touched, setTouched] = useState({});
	const [message, setMessage] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

	const getError = (name) => {
		if (touched[name] && !formData[name]) {
			return 'Campo obrigatório';
		}
		return '';
	};

	const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isFormValid) return;

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
			setMessage(
				response.status === 200 ? ' Formulário enviado com sucesso!' : ` Erro ao enviar. Código: ${response.status}`,
			);
		} catch (error) {
			setMessage(` Erro: ${error.response?.status || error.message}`);
		}
	};

	return (
		<FormContent>
			<Header />
			<Icon
				src="./src/assets/keyIcon.png"
				alt="criar nova conta"
			/>
			<FormHeader>
				<h1>{texts.createAccount}</h1>
				<p>{texts.fillForm}</p>
			</FormHeader>

			<FormFields onSubmit={handleSubmit}>
				<FormInput
					label="Nome"
					name="name"
					placeholder="Escreva seu nome"
					value={formData.name}
					onChange={handleChange}
					onBlur={handleBlur}
					error={getError('name')}
				/>
				<FormInput
					label="E-mail"
					name="email"
					type="email"
					placeholder="exemplo@email.com"
					value={formData.email}
					onChange={handleChange}
					onBlur={handleBlur}
					error={getError('email')}
				/>
				<FormInput
					label="Telefone"
					name="phone"
					type="tel"
					placeholder="+55 (00) 00000-0000"
					value={formData.phone}
					onChange={handleChange}
					onBlur={handleBlur}
					error={getError('phone')}
				/>

				<PasswordRow>
					<PasswordInput
						label="Senha"
						name="password"
						value={formData.password}
						onChange={handleChange}
						onBlur={handleBlur}
						show={showPassword}
						toggle={() => setShowPassword(!showPassword)}
						error={getError('password')}
					/>
					<PasswordInput
						label="Confirme sua senha"
						name="confirm_password"
						value={formData.confirm_password}
						onChange={handleChange}
						onBlur={handleBlur}
						show={showConfirmPassword}
						toggle={() => setShowConfirmPassword(!showConfirmPassword)}
						error={getError('confirm_password')}
					/>
				</PasswordRow>

				<SubmitBtn
					type="submit"
					disabled={!isFormValid}
				>
					Enviar
				</SubmitBtn>
				{message && <Message>{message}</Message>}
			</FormFields>

			<Footer />
		</FormContent>
	);
}
