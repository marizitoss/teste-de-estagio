import { HeaderContainer, Logo, StyledLink } from './styles';

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
