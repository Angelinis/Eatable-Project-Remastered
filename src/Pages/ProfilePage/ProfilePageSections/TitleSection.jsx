import styled from "@emotion/styled"
import StyledHeader2 from "../../GeneralComponents/StyledHeader2"
import StyledParagraph from "../../GeneralComponents/StyledParagraph"
import { colors } from "../../../Styles/colors"
import { StyledPageHeader } from "../../GeneralComponents/StyledPageHeader"

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
    <StyledPageHeader>My Profile</StyledPageHeader>
    <StyledHeaderContainer2>
    <StyledHeader2>Personal details</StyledHeader2>
    <StyledParagraphButton>change</StyledParagraphButton>
    </StyledHeaderContainer2>
    </>
  )

}