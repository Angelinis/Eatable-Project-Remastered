import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { colors } from '../../../Styles/colors';
import { Link } from 'react-router-dom';

const StyledInput = styled.input`
border-radius: 20px;
background: ${colors.lightgray};
border: none; 
`


const StyledDiv = styled.div`
display: flex;
justify-content: space-between; 
width: 312px; 
margin-left: auto;
margin-right: auto;
margin-top: 32px;
`

export const SearchSection = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const timeoutIdRef = useRef(null);


  const handleInputChange = (e) => {
    const inputValue = e.target.value;

  if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
  }

    timeoutIdRef.current = setTimeout(() => {handleSearch(inputValue)}, 2000); 

    setSearchQuery(inputValue);
  }

  const handleSearch = (query) => {
    console.log('Performing search for:', query);
  };

  return (
    <>
    <StyledDiv>
    <img src="/search.svg" alt="search-icon" />
    <StyledInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}/>
    <Link to="/cart"><img src="/shopping-cart.svg" alt="cart-icon" /> </Link> 
    </StyledDiv>
    </>
  )

}


export default SearchSection;
