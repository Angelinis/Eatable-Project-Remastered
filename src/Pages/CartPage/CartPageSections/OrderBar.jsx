import styled from "@emotion/styled"
import { colors } from "../../../Styles/colors"
import { useState } from "react"
import { deleteCart, updateQuantity } from "../../../Javascript/userservice"


const BarContainer = styled.div`
  margin-left: auto;
  width: 52px;
  height: 20px; 
  border-radius: 20px;
  background: ${colors.orange};
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03); 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  padding-left: 5px;
`

const FoodQuantity = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1.125rem;
  line-height: normal;
  color: ${colors.white};
  text-align: center;
`
const StyledImage = styled.img`
height: 20px; 
width: 10px; 
`

export function OrderBar ({id, children, onErase, onChangeQuantity}) {
  const [showQuantity, setShowQuantity] = useState(children);  
  function increaseQuantity() {
    updateQuantity(id, showQuantity +1);
    onChangeQuantity(showQuantity + 1);
    setShowQuantity(showQuantity + 1) ;
  }
  function decreaseQuantity() {
    if(showQuantity > 1) {
      updateQuantity(id, showQuantity -1 );
      onChangeQuantity(showQuantity - 1); 
      setShowQuantity(showQuantity - 1);  
    } else if (showQuantity == 1) {
      onErase(id);
    }
  }
  return  (
    <BarContainer>
      <StyledImage onClick={decreaseQuantity} src="./less_vector.svg" alt="less" />
      <FoodQuantity>
        {showQuantity}
      </FoodQuantity>
      <StyledImage onClick={increaseQuantity} src="./plus_vector.svg" alt="plus" />
    </BarContainer>
  )
}