import fetchService from "./fetchservice";
import { TOKEN_KEY as tokenKey } from "../../config";

export function getHistory(){
  return fetchService("/orders", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

// export function logoutProfile(){
//   return fetchService("/logout", {method: "DELETE"}).then((u)=> u).catch((e)=> e)
// }

// export function loginProfile(body){
//   return fetchService("/login", {method: "POST", body: body}).then((u)=> {
//     const { token, ...user } = u;
//     sessionStorage.setItem(tokenKey, token);
//     return user;
//   }).catch((e)=> console.log(e))
// }
