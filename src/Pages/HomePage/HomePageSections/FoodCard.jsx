import { Link } from "react-router-dom"
import styled from "@emotion/styled"

const FoodImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 120px; 
`

const FoodContainer = styled.div`
  margin-top: 68px;
  margin-bottom: 20px;
  width: 156px;
  height: 212px;
  border-radius: 30px;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  position: relative;
`

const FoodName = styled.h3`
  margin-top: 118px;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;
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

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export function FoodCard ({id, image, foodName, foodPrice}) {

  function formattedPrice(price) {
    return (price/100).toFixed(2);
  }

  return  (
  <StyleLink to={`/show/${id}`}>
    <FoodContainer>
      <FoodImage src={image} alt="food-image" />
      <FoodName>{foodName}</FoodName>
      <FoodPrice>${formattedPrice(foodPrice)}</FoodPrice>
    </FoodContainer>
  </StyleLink>
  )
}