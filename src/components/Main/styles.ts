import { Wrapper as Tech } from 'components/Tech/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
	${({ theme }) => css`
		color: ${theme.colors.black};
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	`}
`;

export const Title = styled.h1`
	font-size: 3.33rem;
`;

export const Image = styled.img`
	width: min(30rem, 100%);
`;

export const Techs = styled.section`
	margin: 1rem 0;

	${Tech} {
		margin: 1rem;
	}
`;
