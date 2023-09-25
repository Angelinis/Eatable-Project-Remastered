import styled from "@emotion/styled"
import StyledHeader2 from "../../GeneralComponents/StyledHeader2"
import StyledParagraph from "../../GeneralComponents/StyledParagraph"
import { colors } from "../../../Styles/colors"
import { StyledPageHeader } from "../../GeneralComponents/StyledPageHeader"
import { Link } from "react-router-dom"

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

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const TitleSection = ({children, change, handleBack}) => {

  return (
    <>
    <StyledPageHeader handleBack={handleBack}>My Profile</StyledPageHeader>
    <StyledHeaderContainer2>
    <StyledHeader2>{children}</StyledHeader2>
    <StyleLink to="/edit">
      <StyledParagraphButton>{change}</StyledParagraphButton>
    </StyleLink>
    </StyledHeaderContainer2>
    </>
  )

}