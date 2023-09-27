import styled from "@emotion/styled"
import { colors } from "../../../Styles/colors"
import { typography } from "../../../Styles/typography"

const StyledTitle = styled.p`
color: ${colors.black};
font-family: ${typography.checkout};
font-size: 1.06rem
font-style: normal;
font-weight: 400;
line-height: normal;
`
const StyledAmount = styled.p`
color: ${colors.black};
font-family: ${typography.checkout};
font-size: 1.375rem;
font-style: normal;
font-weight: 600;
line-height: normal; 
`

const StyledDiv = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  width: 310px;
  margin-right: auto;
  margin-left: auto;
`



export const TotalSection = ({children}) => {
  return (
    <> 
      <StyledDiv>
        <StyledTitle>Total</StyledTitle>
        <StyledAmount>{children}</StyledAmount>
      </StyledDiv>
    </>
  )
}

