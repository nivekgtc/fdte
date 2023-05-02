import styled from 'styled-components';
import { TypeType } from './types.props';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	/* flex: 1; */
	flex-wrap: wrap;

	padding: 5px;

	align-items: center;
	justify-content: center;
`;

export const Type = styled.div<TypeType>`
	display: flex;
	flex: 0 0 calc(50% - 50px);
	width: 99px;
	max-height: 32px;
	height: 32px;

	margin: 5px;
	align-items: center;
	justify-content: center;

	border-radius: 42px;

	text-transform: uppercase;
	font-family: ${(props) => props.theme.typography.fontFamily};
	font-size: ${(props) => props.theme.typography.h2.fontSize};
	font-weight: ${(props) => props.theme.typography.h1.weight};

	color: ${(props) =>
		props.type.includes('ice') || props.type.includes('normal')
			? 'black'
			: 'white'};

	background-color: ${(props) => props.theme.types[props.type]};
`;
