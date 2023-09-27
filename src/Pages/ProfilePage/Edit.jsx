import { useEffect, useState } from "react";
import { getProfile } from "../../Javascript/sessionservice";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import { typography } from "../../Styles/typography";


import StyledButton from "../GeneralComponents/StyledButton";
import { TitleSection } from "./ProfilePageSections/TitleSection";
import BottomBar from "../GeneralComponents/BottomBar";
import { useAuth } from "../../Javascript/authprovider";

const StyledAlert = styled.p`
color: ${colors.black};
font-family: ${typography.checkout};
font-size: 1.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
margin-bottom: 30px;
`

const StyledLabel= styled.label`
opacity: 0.5;
margin-left: 14px;
margin-right: 14px;
margin-top: 10px;
color: ${colors.black};
font-family: ${typography.title};
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

const StyledButtonMargin= styled(StyledButton)`
margin-left: 42px;
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
const StyledInputDiv = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px; 
`

const StyledInput = styled.input`
border: none;              
border-bottom: 1px solid ${colors.black}; 
outline: none;  
font-family: ${typography.title};
font-size: 1.125rem;
font-style: normal;
font-weight: 400;
line-height: normal; 
width: 288px; 
margin-right: auto;
margin-left: auto;
`



export const Edit = () => {
  const {update} = useAuth();
  const [profile, setProfile] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [dataOK, setDataOK] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile()
      .then((data) => {
        setProfile(data);
        setFormData({
          name: data.name || "no information",
          email: data.email || "no information",
          phone: data.phone || "no information",
          address: data.address || "no information",
        });
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.address) {
    update(formData);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
    } else {
      setDataOK(false);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
    <TitleSection handleBack={()=> navigate(-1)}>Update personal details</TitleSection>
    {profile ? 
        (
        <>
          <form>
          <StyledDiv>
            <StyledInputDiv>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </StyledInputDiv>
            <StyledInputDiv>
              <StyledLabel htmlFor="email">Email</StyledLabel>
            
              <StyledInput
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </StyledInputDiv>

            <StyledInputDiv>
              <StyledLabel htmlFor="phone">Phone</StyledLabel>
              <StyledInput
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </StyledInputDiv>

            <StyledInputDiv>
              <StyledLabel htmlFor="address">Address</StyledLabel>
              <StyledInput
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </StyledInputDiv>
          </StyledDiv>
        </form>

          </>
          )
    : "Loading..."
    }
    {!dataOK && <StyledAlert>Please fill all information</StyledAlert>}
    <StyledButtonMargin onClick={()=> handleSubmit()}>Update</StyledButtonMargin>
    <BottomBar></BottomBar>
 
    </>
  )
}


