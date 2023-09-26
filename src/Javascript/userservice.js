import { CART } from "../../config";
import fetchService from "./fetchservice";


export function getHistory(){
  return fetchService("/orders", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

export function getCart(){
  const cartItems = JSON.parse(sessionStorage.getItem(CART));

  if(cartItems){
    return cartItems
  } else {
    return null
  }

}

export function updateCart(newItem){
  const cartItems = JSON.parse(sessionStorage.getItem(CART)) || [];
  const { id, price, picture_url, name } = newItem;
  const modifiedItem = { id, price, picture_url, name, quantity: 1 };
  cartItems.push(modifiedItem);
  sessionStorage.setItem(CART, JSON.stringify(cartItems));
}

export function deleteCart(positionToDelete){
  const cartItems = JSON.parse(sessionStorage.getItem(CART)) || [];
  array.splice(positionToDelete, 1);
  sessionStorage.setItem(CART, JSON.stringify(cartItems));
}
