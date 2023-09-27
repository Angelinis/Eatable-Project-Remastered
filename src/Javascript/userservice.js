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

export function updateQuantity(idToUpdate, newQuantity){
  let cartItems = JSON.parse(sessionStorage.getItem(CART));
  const cartItem = cartItems.find(item => item.id === idToUpdate);
  if (cartItem) {
    cartItem.quantity = newQuantity;
  }
  cartItems = cartItems.map(item => (item.id === idToUpdate ? cartItem : item));
  sessionStorage.setItem(CART, JSON.stringify(cartItems));
}

export function deleteCart(idToDelete){
  let cartItems = JSON.parse(sessionStorage.getItem(CART)) || [];
  cartItems = cartItems.filter(item => {;
    return item.id !== idToDelete;}) 
  sessionStorage.setItem(CART, JSON.stringify(cartItems));
}