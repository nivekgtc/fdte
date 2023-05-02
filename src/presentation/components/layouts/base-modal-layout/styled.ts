import styled from 'styled-components';

import editIcon from 'assets/images/editIcon.png';
import { motion } from 'framer-motion';

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  h2 {
    font-family: ${(props) => props.theme.typography.fontFamily}
    font-size: ${(props) => props.theme.typography.h2.fontSize};
    font-weight: ${(props) => props.theme.typography.h2.weight};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
    color: ${(props) => props.theme.neutral[700]};
    margin-left: 10px;
    margin-right: 10px;
  }
  
  hr {
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.theme.neutral[500]};;
  }
`;

export const PokeballContainer = styled(motion.div)`
	cursor: pointer;
`;

export const WrapperStyle = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	flex-direction: column;

	/* min-width: 100%; */
	span {
		min-width: 100%;

		align-items: center;
		justify-content: center;
	}
	h1 {
		color: ${(props) => props.theme.neutral[700]};
	}

	.name {
		display: flex;

		align-items: center;
	}

	.edit {
		display: flex;
		/* align-items: center; */
		/* justify-content: center; */

		input {
			width: 180px;
			margin-right: 10px;
		}

		button {
			margin-right: 8px;

			width: 48px;
			height: 48px;
			background-color: ${(props) => props.theme.neutral[300]};
			border-radius: 4px;
			border: ${(props) => props.theme.neutral[300]};
		}
	}

	align-items: center;
	justify-content: center;

	h1 {
		font-family: ${(props) => props.theme.typography.fontFamily};
		font-size: ${(props) => props.theme.typography.h1.fontSize};
		line-height: ${(props) => props.theme.typography.h1.lineHeight};
		font-weight: bold;
	}

	h2 {
		font-family: ${(props) => props.theme.typography.fontFamily};
		font-size: ${(props) => props.theme.typography.h2.fontSize};
		line-height: ${(props) => props.theme.typography.h2.lineHeight};
		font-weight: 500;
	}

	label {
		font-family: ${(props) => props.theme.typography.fontFamily};
		font-size: ${(props) => props.theme.typography.label.fontSize};
		line-height: ${(props) => props.theme.typography.label.lineHeight};
		font-weight: bold;
	}

	& .metrics {
		display: flex;
		width: 100%;

		align-items: center;
		justify-content: space-around;

		margin: 24px 0;

		:nth-child(1n) {
			text-align: center;
		}

		/* TODO -> map props below to parent component  */
		hr {
			display: flex;
			// flex: 1;
			width: 2px;
			height: 40px;
		}
	}

	& .ability {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: 40px 0;

		//TODO -> apply theme later
		font-family: 'Open Sans';
		font-size: 12px;
		font-weight: 700;
		line-height: 16px;
		letter-spacing: 0em;
		text-align: center;

		text-transform: uppercase;
		color: ${(props) => props.theme.neutral[700]};
	}
`;

export const EditIcon = styled.image`
	width: 16px;
	height: 16px;

	margin-left: 10px;

	background-image: url(${editIcon});
	background-repeat: no-repeat;
	background-size: auto;

	cursor: pointer;
`;
