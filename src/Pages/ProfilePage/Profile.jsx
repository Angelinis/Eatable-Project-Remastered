import { useEffect, useState } from "react";
import { getProfile } from "../../Javascript/sessionservice";

import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";

import StyledButton from "../GeneralComponents/Button";
import StyledParagraph from "../GeneralComponents/StyledParagraph";
import StyledHeader2 from "../GeneralComponents/StyledHeader2";
import { TitleSection } from "./ProfilePageSections/TitleSection";



const StyledParagraphOpacity = styled(StyledParagraph)`
opacity: 0.5;
margin-left: 14px;
margin-right: 14px;
border-bottom: 2px solid rgba(0, 0, 0, 0.5); 
padding-bottom: 5px; 
`

const StyledHeaderMargin = styled(StyledHeader2)`
margin-left: 16px;
padding-top: 18px;
`

const StyledDiv = styled.div`
width: 315px;
height: 197px;
border-radius: 20px;
background: ${colors.white};
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
`

export const Profile = () => {
  const [profile, setProfile] = useState("");
  useEffect(() => {
    getProfile().then((data) => setProfile(data)).catch((e) => console.log(e));
    console.log(profile)
  }, [])
  

  return (
    <>
    <TitleSection></TitleSection>
    {profile ? 
        (
          <StyledDiv>
          <StyledHeaderMargin>{profile.name}</StyledHeaderMargin>    
          <StyledParagraphOpacity>{profile.email}</StyledParagraphOpacity>    
          <StyledParagraphOpacity>{profile.phone}</StyledParagraphOpacity>    
          <StyledParagraphOpacity>{profile.address}</StyledParagraphOpacity> 
          </StyledDiv>
          )
    : "Loading..."
    }
       
    <StyledButton>Logout</StyledButton>
    </>
  )
}
