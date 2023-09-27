import { deleteCart, getCart } from "../../Javascript/userservice";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import StyledButton from "../GeneralComponents/StyledButton";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"
import { FoodCart } from "./CartPageSections/FoodCart";
import NoDataSection from "../GeneralComponents/NoDataSection";


const StyledButtonCart = styled(StyledButton)`
margin-top: 100px;
margin-bottom:50px
`
const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
`

export const Cart = () => {
  const navigate = useNavigate();
  const [cartInfo, setCartInfo] = useState([])
  useEffect(() => {
    setCartInfo(getCart());
  }, [])

  const handleCheckout = () => {
    console.log('Clicked!');
  };

  const handleEraseItem = (idToDelete) => {
    console.log('Erased!');
    deleteCart(idToDelete);
    setCartInfo(getCart());
  };

  return (
    <> 
    <StyledPageHeader handleBack={()=> navigate(-1)}>Cart</StyledPageHeader>
    {cartInfo && cartInfo.length !== 0 ? 
    
    (
    <>
    {cartInfo.map((cartItem => (
        <FoodCart key={cartItem.id} 
        handleErase={(idToDelete) => handleEraseItem(idToDelete)}
        quantity={cartItem.quantity} 
        id={cartItem.id} image={cartItem.picture_url} foodName={cartItem.name} foodPrice={cartItem.price}/>
    ))
    )}
    <StyledLink to="/checkout">
    <StyledButtonCart onClick={handleCheckout}>Checkout</StyledButtonCart>
    </StyledLink>
    </> 
    )
    :     <NoDataSection image={"/no_cart_vector.svg"}>{"No items in the cart yet"}</NoDataSection>}

    <BottomBar></BottomBar>
    </>
  )
}


