import fetchService from "./fetchservice";


export function getProducts(){
  return fetchService("/products", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

export function getProduct(id){
  return fetchService(`/products/${id}`, {method: "GET"}).then((u)=> u).catch((e)=> e)
}

export function postOrder(body){
  return fetchService(`/orders`, {method: "POST", body: body}).then((u)=> u).catch((e)=> e)
}