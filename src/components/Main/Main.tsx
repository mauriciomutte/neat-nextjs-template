import Tech, { TechProps } from 'components/Tech/Tech';

import techs from './techs.json';
import * as S from './styles';

const Main = () => (
	<S.Wrapper>
		<S.Image src="/img/nextjs-illustration.svg" alt="NextJS illustration" />
		<S.Title>Next.js Playground</S.Title>

		<S.Techs>
			{techs.map((tech: TechProps) => (
				<Tech key={tech.name} name={tech.name} icon={tech.icon} />
			))}
		</S.Techs>
	</S.Wrapper>
);

export default Main;
