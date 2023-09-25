import styled from "@emotion/styled"
import { colors } from "../../../Styles/colors"

const FoodTitle = styled.h1`
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.19rem;
  text-align: center;
  margin-bottom: 10px;
`
const FoodImage = styled.img`
  width: 241px;
  height: 241px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 91px;
  margin-top: 94px;
  margin-right: auto;
  margin-left: auto;
`
const FoodPrice = styled.p`
  color: ${colors.orange};
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.19rem;
  text-align: center;
  margin-bottom: 27px;
`
const FoodDescriptionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.44rem;
  text-align: left;
  margin-bottom: 4px;
`
const FoodDescriptionContent = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: justify;
`
export const FoodUniqueSection = ({name, price, description, picture}) => {

  function formattedPrice(price) {
    return (price/100).toFixed(2);
  }

  return (
    <>
    <FoodTitle>{name}</FoodTitle>
    <FoodImage src={picture}></FoodImage>
    <FoodPrice>${formattedPrice(price)}</FoodPrice>
    <FoodDescriptionTitle>Description</FoodDescriptionTitle>
    <FoodDescriptionContent>{description}</FoodDescriptionContent>
    
    </>
  )
}