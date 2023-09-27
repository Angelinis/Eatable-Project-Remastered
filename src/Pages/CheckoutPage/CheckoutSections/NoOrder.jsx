import styled from "@emotion/styled"
import { colors } from "../../../Styles/colors"
import { typography } from "../../../Styles/typography"

const StyledTitle = styled.p`
color: ${colors.black};
font-family: ${typography.checkout};
font-size: 1.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
`
const StyledDiv = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  width: 310px;
  margin-right: auto;
  margin-left: auto;
`



export const NoOrder = ({address, items}) => {
  return (
    //if noItems is true, then it means that it doesn't have any item at the cart
    <> 
      <StyledDiv>
        {!items ? 
        <StyledTitle>No order information. Please check your cart!</StyledTitle>
        : !address ? 
        <StyledTitle>No address information. Please provide an address!</StyledTitle>
        :
        <StyledTitle>Please check your cart and profile information </StyledTitle>
        }
      </StyledDiv>
    </>
  )
}

