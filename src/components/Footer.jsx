import { texts } from '../constants/texts';
import '../styles/footer.css';

export default function Footer() {
	return (
		<footer>
			<div className="links-container">
				<a href="#a">{texts.privacyPolicy}</a>
				<a href="#a">{texts.termsOfUse}</a>
			</div>
			<p>{texts.footer}</p>
		</footer>
	);
}
