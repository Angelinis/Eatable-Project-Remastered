import { useNavigate } from "react-router-dom";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"
import { getCart } from "../../Javascript/userservice";
import { useEffect, useState } from "react";
import NoDataSection from "../GeneralComponents/NoDataSection";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartInfo, setCartInfo] = useState([])
  useEffect(() => {
    console.log(setCartInfo(getCart()));
  }, [])
  return (
    <> 
    <StyledPageHeader handleBack={()=> navigate(-1)}>Cart</StyledPageHeader>
    {cartInfo ? <p>{cartInfo}</p> :     <NoDataSection image={"/no_cart_vector.svg"}>{"No items in the cart yet"}</NoDataSection>}
    <BottomBar></BottomBar>
    </>
  )
}