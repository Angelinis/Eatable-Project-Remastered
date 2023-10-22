import styled from "@emotion/styled"
import StyledHeader2 from "../GeneralComponents/StyledHeader2"
import { Logo } from "./LoginPageSections/Logo"
import { colors } from "../../Styles/colors"
import LoginForm from "./LoginPageSections/LoginForm"
import { useEffect, useState } from "react"
import { Loading } from "../Loading"
import SignupForm from "./LoginPageSections/SignupForm"

const StyledDiv = styled.div`
width: 414px;
border-radius: 30px;
background: ${colors.white};
box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.06);
`

const StyledDiv2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const StyledSelectedHeader = styled(StyledHeader2)`
text-align: center;
padding-bottom: 14px;
border: none;
border-bottom: 2px solid ${colors.orange};
margin-right: 50px;
margin-left: 50px;
`

const StyledHeader = styled(StyledHeader2)`
text-align: center;
padding-bottom: 14px;
border: none;
margin-right: 50px;
margin-left: 50px;
`

export const Login = () => {
  const [session, setSession] = useState("");
  const [signup, setSignup] = useState(false);


  function handleSession(value) {
    setSession(value);
  }

  function handleSignup(value){
    setSignup(value)
  }

  return (
    <>
    
    {session ? <Loading/> : signup ? 
    
    (     
      <>
      <StyledDiv>
        <Logo></Logo>
        <StyledDiv2>
        <StyledSelectedHeader>Sign up</StyledSelectedHeader>
        <StyledHeader onClick={() => setSignup(false)}>Login</StyledHeader>
        </StyledDiv2>
      </StyledDiv>
       <SignupForm handleSignup={handleSignup}></SignupForm>
       </>
       )
       :
    (     
    <>
    <StyledDiv>
      <Logo></Logo>
      <StyledDiv2>
        <StyledHeader onClick={() => setSignup(true)}>Sign up</StyledHeader>
        <StyledSelectedHeader>Login</StyledSelectedHeader>
      </StyledDiv2>
    </StyledDiv>
     <LoginForm handleSession={handleSession}></LoginForm>
     </>
     ) 

    }

    </>
  )
}
