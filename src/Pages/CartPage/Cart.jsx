import { useNavigate } from "react-router-dom";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"

export const Cart = () => {
  const navigate = useNavigate();

  return (
    <> 
    <StyledPageHeader handleBack={()=> navigate(-1)}>Cart</StyledPageHeader>
    <BottomBar></BottomBar>
    </>
  )
}