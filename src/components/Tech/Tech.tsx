import * as S from './styles';

export type TechProps = {
	name: string;
	icon: string;
};

const Tech = ({ name, icon }: TechProps) => (
	<S.Wrapper>
		<S.Icon src={icon} alt={`${name} icon`} />
		<S.Name>{name}</S.Name>
	</S.Wrapper>
);

export default Tech;
