import { styled } from '@mui/material/styles';

const HeaderContainer = styled('header')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '79px',
	marginBottom: '10px',
	width: '490px',
	height: '28.57px',
});

const Logo = styled('img')({
	width: '88px',
	height: '88px',
});

const StyledLink = styled('a')({
	fontWeight: 600,
	fontSize: '14px',
	lineHeight: '150%',
	textDecoration: 'none',
	color: '#090e29',
});

const Header = () => {
	return (
		<HeaderContainer>
			<Logo
				src="./src/assets/Logotipos.svg"
				alt="Logo"
			/>
			<StyledLink href="/contato">Falar com um especialista</StyledLink>
		</HeaderContainer>
	);
};

export default Header;
