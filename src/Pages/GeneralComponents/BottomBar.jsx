import styled from "@emotion/styled"
import { Link } from "react-router-dom";
import { colors } from "../../Styles/colors";
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";


const StyledDiv = styled.div`
display: flex;
justify-content: space-between; 
width: 312px; 
margin-left: auto;
margin-right: auto;
margin-top: 32px;
a.active div {
  background-color:${colors.orange};
  border-radius: 10px;
  width: 70px;
  display: flex;
  justify-content: center;
}
`



const BottomBar = ()=> {
  const location = useLocation();
  const { pathname } = location;


  return (
    <StyledDiv>
      <Link to="/" className={pathname === '/' ? 'active' : ''}><div><img src="/home.svg" alt="home-icon" /></div></Link>
      <Link to="/profile" className={pathname === '/profile' ? 'active' : ''} ><div><img  src="/user.svg" alt="user-icon" /></div></Link>
      <Link to="/history" className={pathname === '/history' ? 'active' : ''}><div><img src="/history.svg" alt="history-icon" /></div></Link>
    </StyledDiv>
      )
}

export default BottomBar;