import styled from 'styled-components';
import { pxToRem } from '~/application/common/helpers';

export const DropdownWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 1.6rem;

	padding: 20px;

	flex: 1;
	width: 100%;
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
