import styled from "@emotion/styled"
import StyledHeader2 from "../GeneralComponents/StyledHeader2"
import { Logo } from "./LoginPageSections/Logo"
import { colors } from "../../Styles/colors"
import LoginForm from "./LoginPageSections/LoginForm"


const StyledDiv = styled.div`
width: 414px;
border-radius: 30px;
background: ${colors.white};
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
`

export const Login = () => {

  return (
    <>
    <StyledDiv>
     <Logo></Logo>
     <StyledHeader2>Login</StyledHeader2>
     </StyledDiv>
     <LoginForm></LoginForm>
    </>
  )
}
