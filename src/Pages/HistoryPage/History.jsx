import { useEffect, useState } from "react";
import { getHistory } from "../../Javascript/userservice";

import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"
import StyledHeader2 from "../GeneralComponents/StyledHeader2";
import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import { useNavigate } from "react-router-dom";
import NoDataSection from "../GeneralComponents/NoDataSection";

const StyledTitle = styled(StyledHeader2)`
font-weight: 400;
margin-top: 18px;
`

const StyledArrow = styled.img`
margin-left:auto;
`

const StyledTitle2 = styled(StyledHeader2)`
border-top: 1px solid ${colors.black};
padding-top: 13px;
margin-top: 9px;
`


const StyledDescription = styled(StyledTitle)`
font-size: 1rem;
`

const StyledPrice = styled(StyledDescription)`
color: ${colors.orange};
`

const StyledDiv = styled.div`
border-radius: 20px;
background: ${colors.white};
width: 315px; 
margin-right: auto;
margin-left: auto;
margin-bottom: 11px;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
padding-bottom: 23px;
padding-top: 25px;
padding-left: 30px;
padding-right: 30px;
`

const StyledDiv2 = styled.div`
display: flex;
justify-content: space-between; 
align-items: center;
margin-top: 11px;
`

function formatDate(inputDate) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];



  const date = new Date(inputDate);

  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

export const HistoryPage = () => {
const [history, setHistory] = useState("");
useEffect(() => {
  getHistory().then((data) => setHistory(data)).catch((e) => console.log(e));
}, [])

const navigate = useNavigate();

return (
  <>
  <StyledPageHeader handleBack={()=> navigate(-1)}>History</StyledPageHeader>
   {history ? (
  history.length === 0 ? (
    <NoDataSection image={"/no_history_vector.svg"}>{"No history yet"}</NoDataSection>
  ) :
      (
        <div>
          {history.map((order) => 
              (
                <StyledDiv key={order.id}>
                  <StyledTitle>{formatDate(order.created_at)}</StyledTitle>
                  <StyledDiv2>
                    <StyledDescription>{order.items_count} items</StyledDescription>
                    <StyledPrice>${order.total/100}</StyledPrice>
                  </StyledDiv2>
                  <StyledTitle>Order</StyledTitle>
                  {order.order_details.length === 0 ? 
                  <StyledPrice>No items</StyledPrice>  : 
                  (
                    order.order_details.map((detail) => (
                      <StyledDiv2 key={detail.id}>
                        <StyledDescription>{detail.quantity} - {detail.product_name}</StyledDescription>
                        <StyledDescription>${detail.subtotal/100}</StyledDescription>
                      </StyledDiv2>
                    ))
                  )
  
                  }
                  <StyledTitle2>Delivery</StyledTitle2>
                  <StyledDescription>{order.delivery_address}</StyledDescription>
                  <StyledArrow src="./arrowup.svg" alt="arrow-up" />
                </StyledDiv>
              )
            )}
        </div>
        ))
  : "Loading..."

  }
  
  <BottomBar></BottomBar>
  </>
)
}



