import { useEffect, useState } from "react";
import { getHistory } from "../../Javascript/productservice";
import BottomBar from "../GeneralComponents/BottomBar"
import { StyledPageHeader } from "../GeneralComponents/StyledPageHeader"


export const HistoryPage = () => {
const [history, setHistory] = useState("");
useEffect(() => {
  getHistory().then((data) => setHistory(data)).catch((e) => console.log(e));
}, [])


return (
  <>
  <StyledPageHeader>History</StyledPageHeader>
   {history ? 
      (
        <div>
          {history.map((order) => 
              (
                <div key={order.id}>
                  <p>{order.created_at}</p>
                  <p>{order.total}</p>
                  <p>{order.items_count}</p>
                </div>
              )
            )}
        </div>
        )
  : "Loading..."

  }
  
  <BottomBar></BottomBar>
  </>
)
}



