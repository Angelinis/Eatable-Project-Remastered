import { useEffect, useState, useRef  } from 'react'
import { motion } from "framer-motion";
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import BottomBar from '../GeneralComponents/BottomBar'
import { FoodCard } from './HomePageSections/FoodCard'
import { SearchSection } from './HomePageSections/SearchSection'

import {getProducts} from '../../Javascript/productservice'

const MenuContainer = styled.div`
 display: grid;
 grid-template-columns: auto auto; 
 justify-content: center;
 gap: 20px;
`

export const HomePage = () => {
  const [menu, setMenu] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [height, setHeight] = useState(0);
  const carousel = useRef();
  const otherHeight = 600;

  useEffect(() => {
  getProducts().then((data)=> setMenu(data)).catch((error)=>console.log(error))
  console.log(menu)
  }, [refresh])

  function handleRefresh(value){
    setRefresh(value);
  };

  return (
  <>
    <SearchSection/> 
    <MenuContainer> 
      {menu ? menu.map((foodcard => (
         <FoodCard id= {foodcard.id} key={foodcard.id} image= {foodcard.picture_url} foodName={foodcard.name} foodPrice={foodcard.price}></FoodCard>
      ))

      ): "Loading"}
    </MenuContainer>

    <BottomBar></BottomBar>
  </>
  )
}
