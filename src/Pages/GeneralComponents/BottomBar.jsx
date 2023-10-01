import styled from "@emotion/styled"
import { Link } from "react-router-dom";
import { colors } from "../../Styles/colors";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";


const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
width: 312px;
position: fixed;
bottom: 16px; 
left: 50%;
transform: translateX(-50%);
background-color: ${colors.white}; 
padding: 10px; 
border: 1px solid #ccc; 
border-radius: 10px; 
z-index: 999; 

a.active div {
  background-color:${colors.orange};
  border-radius: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
}
`
const StyledDiv2 = styled.div`
height: 50px;
`


const BottomBar = ()=> {
  const location = useLocation();
  const { pathname } = location;


  return (
    <>
    <StyledDiv>
      <Link to="/" className={pathname === '/' ? 'active' : ''}><div><img src="/home.svg" alt="home-icon" /></div></Link>
      <Link to="/profile" className={pathname === '/profile' ? 'active' : ''} ><div><img  src="/user.svg" alt="user-icon" /></div></Link>
      <Link to="/history" className={pathname === '/history' ? 'active' : ''}><div><img src="/history.svg" alt="history-icon" /></div></Link>
    </StyledDiv>
    <StyledDiv2></StyledDiv2>
    </>
      )
}

export default BottomBar;