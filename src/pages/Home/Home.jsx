import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Container, FormSection, ImageSection, StyledImage } from './styles';

export default function Home() {
	return (
		<Container>
			<FormSection>
				<RegisterForm />
			</FormSection>
			<ImageSection>
				<StyledImage
					src="./src/assets/rightcontent_bg-image.svg"
					alt="conteúdo a esquerda"
				/>
			</ImageSection>
		</Container>
	);
}
