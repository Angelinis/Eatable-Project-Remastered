import { useEffect, useState } from 'react'
import BottomBar from '../GeneralComponents/BottomBar'
import { FoodCard } from './HomePageSections/FoodCard'
import { SearchSection } from './HomePageSections/SearchSection'
import {getProducts} from '../../Javascript/productservice'


export const HomePage = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
  getProducts().then((data)=> setMenu(data)).catch((error)=>console.log(error))
  console.log(menu)
  
  }, [])

  return (
    <>
    <SearchSection/> 
    <div>
      {menu ? menu.map((foodcard => (
        <FoodCard key={foodcard.id} id= {foodcard.id} image= {foodcard.picture_url} foodName={foodcard.name} foodPrice={foodcard.price}></FoodCard>
      ))

      ): "Loading"}
    </div>

    {/* <FoodCard id= {id} image= {image} foodName={foodName} foodPrice={foodPrice}></FoodCard> */}
    <BottomBar></BottomBar>
    </>
  )
}