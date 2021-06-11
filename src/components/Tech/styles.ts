import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
	${({ theme }) => css`
		border-radius: 1rem;
		background-color: ${theme.colors.gray};
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1rem 2rem;
		width: min(30rem);
	`}
`;

export const Icon = styled.img`
	border-radius: 100%;
	width: 3.6rem;
`;

export const Name = styled.h1`
	font-size: 1.6rem;
`;
