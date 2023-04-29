import ashFront from 'assets/images/ashFront.png';
import ashLeftLeg from 'assets/images/ashLeftLeg.png';
import ashRightLeg from 'assets/images/ashRightLeg.png';
import ashStop from 'assets/images/ashStop.png';
import styled from 'styled-components';
import { AshAvatarProps } from './ash-avatar.props';

const mapPositionToProps = {
	ashFront,
	ashLeftLeg,
	ashRightLeg,
	ashStop,
};
export const Container = styled.div`
	position: relative;
	top: 60%;
	left: 50%;
`;

export const AshImage = styled.div<AshAvatarProps>`
	/* position: relative; */
	/* top: 60%;
	left: 50%; */

	margin-bottom: -120px;

	width: 64px;
	height: 64px;

	background-image: url(${(props) =>
		mapPositionToProps[props.position] || ashFront});
`;
