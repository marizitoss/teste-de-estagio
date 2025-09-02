import { styled } from '@mui/material/styles';
import { texts } from '../../constants/texts';

const FooterContainer = styled('footer')({
	fontFamily: 'Inter, sans-serif',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '0.5rem',
	boxShadow: 'none',
	padding: '1rem 1.5rem',
	background: 'transparent',
	width: 'auto',
	boxSizing: 'border-box',
	borderTop: 'none',
	alignSelf: 'center',
	minHeight: 0,
});

const LinksContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	gap: '0.5rem',
	marginRight: '7rem',
});

const FooterLink = styled('a')({
	fontWeight: 500,
	fontSize: '0.6875rem',
	lineHeight: '1.1',
	textDecoration: 'none',
	color: '#090e29',
});

const FooterText = styled('p')({
	fontWeight: 500,
	fontSize: '0.6875rem',
	lineHeight: '1.1',
	color: '#DBDBDB',
});

export default function Footer() {
	return (
		<FooterContainer>
			<LinksContainer>
				<FooterLink href="#a">{texts.privacyPolicy}</FooterLink>
				<FooterLink href="#a">{texts.termsOfUse}</FooterLink>
			</LinksContainer>
			<FooterText>{texts.footer}</FooterText>
		</FooterContainer>
	);
}
