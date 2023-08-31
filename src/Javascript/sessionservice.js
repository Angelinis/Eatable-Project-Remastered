import fetchService from "./fetchservice";

export function getProfile(){
  return fetchService("/profile", {method: "GET"}).then((u)=> u).catch((e)=> e)
}