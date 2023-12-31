import styled from "@emotion/styled"
import StyledHeader from "./StyledHeader"


const StyledHeaderContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto; 
  align-items: center; 
`


const StyledImage = styled.img`
margin-right: auto;
`

export const StyledPageHeader = ({children, handleBack}) => {

  return (
    <>
    <StyledHeaderContainer>
      <StyledImage onClick={handleBack} src="/back.svg" alt="back-arrow" />
      <StyledHeader>{children}</StyledHeader>
    </StyledHeaderContainer>
    </>
  )

}