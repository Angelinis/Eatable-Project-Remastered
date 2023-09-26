import styled from "@emotion/styled"
import { colors } from "../../../Styles/colors"

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
`



const FoodName = styled.h3`
  color: ${colors.black}
  margin-top: 28px;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1rem;
  line-height: normal;
  text-align: center;
  text-transform: capitalize;
`

const FoodPrice = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;
  color: #FA4A0C;
`

export function FoodCart ({id, image, foodName, foodPrice}) {

  function formattedPrice(price) {
    return (price/100).toFixed(2);
  }

  return  (
    <FoodContainer>
      <FoodImage src={image} alt="food-image" />
      <TextContainer>
      <FoodName>{foodName}</FoodName>
      <FoodPrice>${formattedPrice(foodPrice)}</FoodPrice>
      </TextContainer>
    </FoodContainer>
  )
}