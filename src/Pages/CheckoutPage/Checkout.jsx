import { getCart } from "../../Javascript/userservice";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import StyledButton from "../GeneralComponents/StyledButton";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader";
import StyledHeader2 from "../GeneralComponents/StyledHeader2";
import StyledParagraph from "../GeneralComponents/StyledParagraph";
import { colors } from "../../Styles/colors";
import { useAuth } from "../../Javascript/authprovider";

const StyledParagraphButton = styled(StyledParagraph)`
color:${colors.orange}; 
`
const StyledButtonCart = styled(StyledButton)`
margin-top: 100px;
margin-bottom:50px
`
const StyledHeaderContainer2 = styled.div`
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 2.25rem;
  margin-left: 42px;
  margin-right: 61px;
`

const StyledParagraphOpacity = styled(StyledParagraph)`
opacity: 0.5;
margin-left: 14px;
margin-right: 14px;
border-bottom: 2px solid rgba(0, 0, 0, 0.5); 
padding-bottom: 5px; 
margin-bottom: 10px;
margin-top: 10px;
`

const StyledParagraphOpacity2 = styled(StyledParagraph)`
opacity: 0.5;
margin-left: 14px;
margin-right: 14px;
margin-top: 10px;
`

const StyledHeaderMargin = styled(StyledHeader2)`
margin-left: 16px;
padding-top: 18px;
`

const StyledDiv = styled.div`
width: 315px;
border-radius: 20px;
background: ${colors.white};
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
margin-bottom: 45px;
margin-left: 42px;
padding-bottom: 46px;
`

export const Checkout = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [cartInfo, setCartInfo] = useState([])
  useEffect(() => {
    setCartInfo(getCart());
  }, [])

  const handleOrder = () => {
    console.log('Clicked!');
  };

  return (
    <> 
    <StyledPageHeader handleBack={()=> navigate(-1)}>Checkout</StyledPageHeader>
    <StyledHeaderContainer2>
      <StyledHeader2>Delivery details</StyledHeader2>
      <StyledParagraphButton>change</StyledParagraphButton>
    </StyledHeaderContainer2>

    <StyledDiv>
          <StyledHeaderMargin>{user.name}</StyledHeaderMargin>      
          <StyledParagraphOpacity2>Phone</StyledParagraphOpacity2>                
          <StyledParagraphOpacity>{user.phone ? user.phone : "No information"}</StyledParagraphOpacity>    
          <StyledParagraphOpacity2>Address</StyledParagraphOpacity2>                
          <StyledParagraphOpacity>{user.address ? user.address : "No information"}</StyledParagraphOpacity> 
    </StyledDiv>

    <StyledButtonCart onClick={handleOrder}>Complete Order</StyledButtonCart>

    <BottomBar></BottomBar>
    </>
  )
}

