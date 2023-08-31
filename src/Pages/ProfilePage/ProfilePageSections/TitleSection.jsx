import styled from "@emotion/styled"
import StyledHeader from "../../GeneralComponents/StyledHeader"
import StyledHeader2 from "../../GeneralComponents/StyledHeader2"

const StyledHeaderContainer = styled.div`
  margin-top: 3.125rem;
  margin-bottom: 2.125rem;
`

const StyledHeaderContainer2 = styled.div`
  margin-bottom: 2.25rem;
  margin-left: 2.625rem;
`


export const TitleSection = () => {

  return (
    <>
    <StyledHeaderContainer>
    <StyledHeader>My profile</StyledHeader>
    </StyledHeaderContainer>
    <StyledHeaderContainer2>
    <StyledHeader2>Personal details</StyledHeader2>
    </StyledHeaderContainer2>
    </>
  )

}