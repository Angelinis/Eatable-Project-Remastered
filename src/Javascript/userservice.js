import fetchService from "./fetchservice";

export function getHistory(){
  return fetchService("/orders", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

