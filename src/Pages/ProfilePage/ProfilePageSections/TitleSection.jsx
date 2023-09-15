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

export const TitleSection = ({children, change}) => {

  return (
    <>
    <StyledPageHeader>My Profile</StyledPageHeader>
    <StyledHeaderContainer2>
    <StyledHeader2>{children}</StyledHeader2>
    <Link to="/edit">
      <StyledParagraphButton>{change}</StyledParagraphButton>
    </Link>
    </StyledHeaderContainer2>
    </>
  )

}