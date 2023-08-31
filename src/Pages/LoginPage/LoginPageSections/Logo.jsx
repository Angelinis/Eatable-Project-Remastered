import styled from "@emotion/styled"
import { StyledLogo } from "./StyledLogo"

const StyledImage = styled.img`
margin-bottom:10px;
margin-left: auto;
margin-right: auto;
padding-top: 140px;
`

export const Logo = () => {

  return (
    <>
      <StyledImage src="/Eatable.svg" />   
      <StyledLogo>Food for everyone</StyledLogo>
    </>
  )
}
