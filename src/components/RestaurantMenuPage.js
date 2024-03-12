import React, { useState,useEffect } from 'react'
import ItemList from './ItemList';


const RestaurantMenuPage = ({restaurantMenu}) => { 
    
  return (
    <>
      {restaurantMenu?.map((menuItems) => (
            <ItemList menuItem={menuItems} />
          ))}
    </>
  )
}

export default RestaurantMenuPage
