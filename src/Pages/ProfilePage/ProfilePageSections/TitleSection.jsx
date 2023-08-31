import styled from "@emotion/styled"
import StyledHeader from "../../GeneralComponents/StyledHeader"
import StyledHeader2 from "../../GeneralComponents/StyledHeader2"
import StyledParagraph from "../../GeneralComponents/StyledParagraph"
import { colors } from "../../../Styles/colors"

const StyledHeaderContainer = styled.div`
  margin-top: 3.125rem;
  margin-bottom: 2.125rem;
`

const StyledHeaderContainer2 = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 2.25rem;
  margin-left: 42px;
  margin-right: 61px;
`
const StyledParagraphButton = styled(StyledParagraph)`
color:${colors.orange}; 
`


export const TitleSection = () => {

  return (
    <>
    <StyledHeaderContainer>
    <StyledHeader>My profile</StyledHeader>
    </StyledHeaderContainer>
    <StyledHeaderContainer2>
    <StyledHeader2>Personal details</StyledHeader2>
    <StyledParagraphButton>change</StyledParagraphButton>
    </StyledHeaderContainer2>
    </>
  )

}