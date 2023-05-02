import ashFront from 'assets/images/ashFront.png';
import ashLeftLeg from 'assets/images/ashLeftLeg.png';
import ashRightLeg from 'assets/images/ashRightLeg.png';
import ashStop from 'assets/images/ashStop.png';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { AshAvatarProps } from './ash-avatar.props';

const mapPositionToProps = {
	ashFront,
	ashLeftLeg,
	ashRightLeg,
	ashStop,
};
export const Container = styled.div`
	position: absolute;
	top: 60%;
	left: 50%;

	z-index: 1;
`;

export const AshImage = styled(motion.div)<AshAvatarProps>`
	/* position: relative; */
	/* top: 60%;
	left: 50%; */
	cursor: pointer;

	margin-bottom: -120px;

	width: 64px;
	height: 64px;

	background-image: url(${(props) => mapPositionToProps[props.position]});
	background-repeat: no-repeat;
`;
