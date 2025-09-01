import { texts } from '../constants/texts';

export default function Footer() {
	return (
		<footer>
			<a href="#a">{texts.privacyPolicy}</a>
			<a href="#a">{texts.termsOfUse}</a>
			<p>{texts.footer}</p>
		</footer>
	);
}
