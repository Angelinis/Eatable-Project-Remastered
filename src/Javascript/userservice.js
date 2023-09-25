import { CART } from "../../config";
import fetchService from "./fetchservice";


export function getHistory(){
  return fetchService("/orders", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

export function getCart(){
  const cartItems = sessionStorage.getItem(CART);

  if(cartItems){
    return cartItems
  } else {
    return null
  }

}

export function updateCart(newItem){
  const cartItems = JSON.parse(sessionStorage.getItem(CART)) || [];
  newItem.quantity = 1;
  cartItems.push(newItem);
  sessionStorage.setItem(CART, JSON.stringify(cartItems));
}

export function deleteCart(positionToDelete){
  const cartItems = JSON.parse(sessionStorage.getItem(CART)) || [];
  array.splice(positionToDelete, 1);
  sessionStorage.setItem(CART, JSON.stringify(cartItems));
}
