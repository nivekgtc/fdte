import styled from 'styled-components';

import defaultPk from 'assets/images/svgs/default-pokemon.svg';
import empty from 'assets/images/svgs/empty-pokemon.svg';
import pokemon from 'assets/images/svgs/pokemon.svg';
import { motion } from 'framer-motion';

const imageType = {
	defaultPk,
	pokemon,
	empty,
};

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
	h1 {
		color: ${(props) => props.theme.neutral[700]};
	}

	display: flex;
	flex: 1;
	width: 100%;
	flex-direction: column;

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
		flex: 0 0 calc(50% - 10px);

		align-items: center;
		justify-content: center;

		margin: 40px;

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
