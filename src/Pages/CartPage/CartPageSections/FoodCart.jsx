import styled from "@emotion/styled"
import { colors } from "../../../Styles/colors"
import { OrderBar } from "./OrderBar"
import { useState } from "react"

const FoodImage = styled.img`
  width: 62px;
  height: 62px; 
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`

const FoodContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 23px;
  margin-down: 20px;
  width: 315px;
  height: 102px; 
  border-radius: 20px;
  background: #FFFFFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03); 
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 200px;
`

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  width: 200px;
`



const FoodName = styled.h3`
  color: ${colors.black}
  margin-top: 28px;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1rem;
  line-height: normal;
  margin-right: auto;
  margin-left: 20px;
  text-transform: capitalize;
`

const FoodPrice = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1.125rem;
  line-height: normal;
  color: ${colors.orange};
  margin-left: 20px;
  margin-right: auto;
`

export function FoodCart ({id, image, foodName, foodPrice, quantity, handleErase}) {

  const [updatedQuantity, setUpdatedQuantity] = useState(quantity)

  function formattedPrice(price, quantity) {
    return (price*quantity/100).toFixed(2);
  }

  function handleChangeQuantity(newValue){
    setUpdatedQuantity(newValue);
  }

  return  (
    <FoodContainer>
      <FoodImage src={image} alt="food-image" />
      <TextContainer>
      <FoodName>{foodName}</FoodName>
      <BarContainer>
      <FoodPrice>${formattedPrice(foodPrice, updatedQuantity)}</FoodPrice>
      <OrderBar onErase={handleErase} onChangeQuantity={(newValue)=>handleChangeQuantity(newValue)} id={id}>{quantity}</OrderBar>
      </BarContainer>
      </TextContainer>
    </FoodContainer>
  )
}