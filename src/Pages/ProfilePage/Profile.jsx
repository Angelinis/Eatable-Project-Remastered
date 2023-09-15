import { useEffect, useState } from "react";
import { getProfile } from "../../Javascript/sessionservice";
import { useNavigate } from "react-router-dom";


import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";

import StyledButton from "../GeneralComponents/StyledButton";
import StyledParagraph from "../GeneralComponents/StyledParagraph";
import StyledHeader2 from "../GeneralComponents/StyledHeader2";
import { TitleSection } from "./ProfilePageSections/TitleSection";
import { useAuth } from "../../Javascript/authprovider";
import BottomBar from "../GeneralComponents/BottomBar";
import { Link } from "react-router-dom";

const StyledImage = styled.img`
padding-top: 18px;
padding-right: 14px;
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

const StyledButtonMargin= styled(StyledButton)`
margin-left: 42px;
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

const StyledDiv2 = styled(StyledDiv)`
padding-bottom: 18px;
display: flex;
justify-content: space-between;
flex-direction: row; 
`


export const Profile = () => {
  const {logout} = useAuth();
  const [profile, setProfile] = useState("");
  useEffect(() => {
    getProfile().then((data) => setProfile(data)).catch((e) => console.log(e));
  }, [])
  
  const navigate = useNavigate();


  return (
    <>
    <TitleSection change={"change"} handleBack={()=> navigate(-1)}>Personal details</TitleSection>
    {profile ? 
        (
          <StyledDiv>
          <StyledHeaderMargin>{profile.name}</StyledHeaderMargin>    
          <StyledParagraphOpacity2>Email</StyledParagraphOpacity2>    
          <StyledParagraphOpacity>{profile.email ? profile.email : "No information"}</StyledParagraphOpacity>    
          <StyledParagraphOpacity2>Phone</StyledParagraphOpacity2>                
          <StyledParagraphOpacity>{profile.phone ? profile.phone : "No information"}</StyledParagraphOpacity>    
          <StyledParagraphOpacity2>Address</StyledParagraphOpacity2>                
          <StyledParagraphOpacity>{profile.address ? profile.address : "No information"}</StyledParagraphOpacity> 
          </StyledDiv>
          )
    : "Loading..."
    }

    <StyledDiv2>
    <StyledHeaderMargin>History </StyledHeaderMargin>    
    <Link to="/history">
      <StyledImage src="./arrowright.svg" alt="arrow-right" />
    </Link>
    </StyledDiv2>
       
    <StyledButtonMargin onClick={()=> logout()}>Logout</StyledButtonMargin>
    <BottomBar></BottomBar>
    </>
  )
}
