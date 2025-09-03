import logo from '../../assets/Logotipos.svg';
import { HeaderContainer, Logo, StyledLink } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<Logo
				src={logo}
				alt="Logo"
			/>
			<StyledLink href="/contato">Falar com um especialista</StyledLink>
		</HeaderContainer>
	);
};

export default Header;
