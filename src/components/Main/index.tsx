import * as S from './styles';

const Main = ({ title = 'nextjs-playground', description = 'Typescript, ReactJS, NextJS and styled-components' }) => (
	<S.Wrapper>
		<S.Title>{title}</S.Title>
		<S.Description>{description}</S.Description>
		<S.Illustration src="/img/home-illustration.svg" alt="Code thinking" />
	</S.Wrapper>
);

export default Main;
