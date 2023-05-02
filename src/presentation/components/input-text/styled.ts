import styled from 'styled-components';
import { pxToRem } from '~/application/common/helpers';

export const InputTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.6rem;

	flex: 1;
	width: 85%;
`;

export const Label = styled.label`
	margin-bottom: 0.4rem;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 1.6;
	text-transform: uppercase;
	color: #2e3a59;
`;

export const Error = styled.label`
	font-family: 'Open Sans';

	line-height: 24px;
	font-weight: 600;
	margin-bottom: 0.4rem;
	font-weight: bold;
	font-size: ${pxToRem(15)}rem;

	color: ${(props) => props.theme.palette.action.dark};
`;

export const Input = styled.input<{ error?: boolean }>`
	width: 100%;
	font-weight: 700;
	font-size: 1.6rem;
	padding: 1.2rem 0 1.2rem 0.8rem;
	background: #ffffff;
	border: 2px solid #e4e9f2;
	border-radius: 3px;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	&:focus,
	&:active {
		border-color: ${(props) =>
			props?.error ? props.theme.palette.action.dark : '#598bff'};
	}

	border-color: ${(props) => props?.error && props.theme.palette.action.dark};

	&::placeholder {
		color: #c5cef4;
		font-weight: 400;
	}
`;
