import { useNavigate } from "react-router-dom";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"
import { getCart } from "../../Javascript/userservice";
import { useEffect, useState } from "react";
import NoDataSection from "../GeneralComponents/NoDataSection";
import { FoodCart } from "./CartPageSections/FoodCart";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartInfo, setCartInfo] = useState([])
  useEffect(() => {
    setCartInfo(getCart());
  }, [])
  return (
    <> 
    <StyledPageHeader handleBack={()=> navigate(-1)}>Cart</StyledPageHeader>
    {cartInfo && cartInfo.length !== 0 ? 
    cartInfo.map((cartItem => (
        <FoodCart key={cartItem.id} id={cartItem.id} image={cartItem.picture_url} foodName={cartItem.name} foodPrice={cartItem.price}/>
    ))
    ) 
    
    :     <NoDataSection image={"/no_cart_vector.svg"}>{"No items in the cart yet"}</NoDataSection>}
    <BottomBar></BottomBar>
    </>
  )
}


