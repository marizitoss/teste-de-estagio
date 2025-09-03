import content from '../../assets/rightcontent_bg-image.svg';
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
					src={content}
					alt="conteúdo a esquerda"
				/>
			</ImageSection>
		</Container>
	);
}
