import styled from "@emotion/styled"
import { Logo } from "./LoginPage/LoginPageSections/Logo";
import { colors } from "../Styles/colors";
import { BiLoaderAlt } from 'react-icons/bi';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledDiv = styled.div`
width: 262px;
height: 262px; 
border-radius: 262px; 
background: ${colors.white};
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`

const EllipseLoader = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  @keyframes rotationEllipse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  

  .ellipse {
    animation: rotationEllipse ${`${3}s`} linear infinite;
  }
`;

export const Loading = () => {
  return (
    <Container>
      <StyledDiv>
        <Logo></Logo>
        <EllipseLoader>
          <BiLoaderAlt color={colors.orange} className="ellipse"></BiLoaderAlt>
        </EllipseLoader>
      </StyledDiv>
    </Container>
  )
}


