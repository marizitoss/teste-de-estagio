import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import { texts } from './constants/texts';
import './styles/app.css';

export default function App() {
	return (
		<div>
			<div className="app-desktop">
				<div className="form-container">
					<header>
						<img
							src="./src/assets/Logotipos.svg"
							alt="ecto logo"
						/>
						<a href="#contact-specialist">{texts.especialist}</a>
					</header>
					<RegisterForm />
					<Footer />
				</div>
				<div className="image-container">
					<img
						src="./src/assets/rightcontent_bg-image.svg"
						alt="conteúdo a esquerda"
					/>
				</div>
			</div>
		</div>
	);
}
