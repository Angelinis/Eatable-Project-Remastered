import styled from "@emotion/styled"
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
display: flex;
justify-content: space-between; 
width: 312px; 
margin-left: auto;
margin-right: auto;
margin-top: 32px;
`



const BottomBar = ()=> {

  return (
    <StyledDiv>
      <Link to="/"><img src="/home.svg" alt="home-icon" /></Link>
      <Link to="/profile"><img src="/user.svg" alt="user-icon" /></Link>
      <Link to="/history"><img src="/history.svg" alt="history-icon" /></Link>
    </StyledDiv>
      )
}

export default BottomBar;