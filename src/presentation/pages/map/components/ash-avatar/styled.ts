import styled from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
`;

// import styled from 'styled-components'
// import ashFront from "assets/images/ashFront.png";
// import ashLeftLeg from "assets/images/ashLeftLeg.png";
// import ashRightLeg from "assets/images/ashRightLeg.png";
// import ashStop from "assets/images/ashStop.png";

// const mapPositionToProps = {
//   ashFront,
//   ashLeftLeg,
//   ashRightLeg,
//   ashStop,
// };

// export const AshImage = styled.div`
//   width: 64px;
//   height: 64px;

//   background-image: url(${(props) =>
//     mapPositionToProps[props.position] || ashFront});
// `;
