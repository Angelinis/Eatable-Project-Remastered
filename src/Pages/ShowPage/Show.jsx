import { useNavigate, useParams } from "react-router-dom";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"
import StyledButton from "../GeneralComponents/StyledButton";
import { useEffect, useState } from "react";

const StyledButtonCart = styled(StyledButton)`
margin-top: 100px;
margin-bottom:50px
`

export const Show = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [foodData, setFoodData] = useState([])

  useEffect(() => {
    first
  
  }, [third])
  
  return (
    <> 
    
    <StyledPageHeader handleBack={()=> navigate(-1)}>Show</StyledPageHeader>
    <StyledButtonCart></StyledButtonCart>
    <BottomBar></BottomBar>
    </>
  )
}