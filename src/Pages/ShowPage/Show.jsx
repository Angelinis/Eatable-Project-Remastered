import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"
import StyledButton from "../GeneralComponents/StyledButton";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";


import { getProduct } from "../../Javascript/productservice";
import { FoodUniqueSection } from "./ShowPageSections/FoodUniqueSection";
import { updateCart } from "../../Javascript/userservice";

const StyledButtonCart = styled(StyledButton)`
margin-top: 100px;
margin-bottom:50px
`

export const Show = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [foodData, setFoodData] = useState([])

  const handleAddToCart = () => {
    console.log('Add to Cart clicked!');
    updateCart(foodData);
  };

  useEffect(() => {
    getProduct(id).then((data)=> setFoodData(data)).catch((e)=>console.log(e))
  }, [foodData])
  
  return (
    <> 
    
    <StyledPageHeader handleBack={()=> navigate(-1)}>Show</StyledPageHeader>
    {foodData ? (<><FoodUniqueSection name={foodData.name} price={foodData.price} description={foodData.description} picture={foodData.picture_url}>
    </FoodUniqueSection>
    <StyledButtonCart onClick={handleAddToCart}>Add to Cart</StyledButtonCart></>)
     :
    "Loading..."
    }
    <BottomBar></BottomBar>
    </>
  )
}