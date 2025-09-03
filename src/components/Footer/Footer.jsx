import { texts } from '../../constants/texts';
import { FooterContainer, FooterLink, FooterText, LinksContainer } from './styles';

export default function Footer() {
	return (
		<FooterContainer>
			<LinksContainer>
				<FooterLink href="#privacyPolicy">{texts.privacyPolicy}</FooterLink>
				<FooterLink href="#termsOfUse">{texts.termsOfUse}</FooterLink>
			</LinksContainer>
			<FooterText>{texts.footer}</FooterText>
		</FooterContainer>
	);
}
