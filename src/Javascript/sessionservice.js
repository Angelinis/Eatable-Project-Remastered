import fetchService from "./fetchservice";

export function getProfile(){
  return fetchService("/profile", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

export function logoutProfile(){
  return fetchService("/logout", {method: "DELETE"}).then((u)=> u).catch((e)=> e)
}