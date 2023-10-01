import { useEffect, useState, useRef  } from 'react'
import styled from '@emotion/styled';

import BottomBar from '../GeneralComponents/BottomBar'
import { FoodCard } from './HomePageSections/FoodCard'
import { SearchSection } from './HomePageSections/SearchSection'

import {getProducts} from '../../Javascript/productservice'
import NoDataSection from '../GeneralComponents/NoDataSection';

const MenuContainer = styled.div`
 display: grid;
 grid-template-columns: auto auto; 
 justify-content: center;
 gap: 20px;
`

export const HomePage = () => {
  const [menu, setMenu] = useState([])
  const [filterMenu, setFilterMenu] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState(null);


  useEffect(() => {  
  getProducts().then((data)=> {
    setMenu(data);
    setFilterMenu(data);
  }).catch((error)=>console.log(error))
  }, [])

  useEffect(() => {  
    filter ? 
    ( setFilterMenu( 
                    menu.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
                    )
    )
    : (setFilterMenu(menu))
    console.log(menu.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())));
  }, [refresh])

  


  function handleRefresh(value){
    setRefresh(value);
  };

  function handleFilter(value){
    setFilter(value);
  };

  return (
  <>
    <SearchSection onRefresh={handleRefresh} onFilter={handleFilter} refreshValue = {refresh}/> 
    <MenuContainer> 
      {filterMenu ? ( filterMenu.length > 0 ? filterMenu.map((foodcard => (
         <FoodCard id= {foodcard.id} key={foodcard.id} image= {foodcard.picture_url} foodName={foodcard.name} foodPrice={foodcard.price}></FoodCard>
      ))

      ) 
      :
        <NoDataSection image="/no_result_vector.svg">No Results</NoDataSection>
      )
      : "Loading"}
    </MenuContainer>

    <BottomBar></BottomBar>
  </>
  )
}
