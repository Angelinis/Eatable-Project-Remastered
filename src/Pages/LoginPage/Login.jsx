import styled from "@emotion/styled"
import StyledHeader2 from "../GeneralComponents/StyledHeader2"
import { Logo } from "./LoginPageSections/Logo"
import { colors } from "../../Styles/colors"
import LoginForm from "./LoginPageSections/LoginForm"
import { useEffect, useState } from "react"
import { Loading } from "../Loading"

const StyledDiv = styled.div`
width: 414px;
border-radius: 30px;
background: ${colors.white};
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
`
const StyledHeader = styled(StyledHeader2)`
text-align: center;
padding-bottom: 14px;
border: none;
border-bottom: 2px solid ${colors.orange};
margin-right: 50px;
margin-left: 50px;
`

export const Login = () => {
  const [session, setSession] = useState("");

  function handleSession(value) {
    setSession(value);
  }

  return (
    <>
    
    {session ? <Loading/> :  (     
    <>
    <StyledDiv>
      <Logo></Logo>
      <StyledHeader>Login</StyledHeader>
    </StyledDiv>
     <LoginForm handleSession={handleSession}></LoginForm>
     </>
     )}

    </>
  )
}
