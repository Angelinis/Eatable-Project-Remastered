import fetchService from "./fetchservice";
import { TOKEN_KEY as tokenKey } from "../../config";

export function getProfile(){
  return fetchService("/profile", {method: "GET"}).then((u)=> u).catch((e)=> e)
}

export function logoutProfile(){
  return fetchService("/logout", {method: "DELETE"}).then((u)=> u).catch((e)=> e)
}

export function updateProfile(body){
  return fetchService("/profile", {method: "PATCH", body: body}).then((u)=> u).catch((e)=> console.log(e))
}


export function loginProfile(body){
  return fetchService("/login", {method: "POST", body: body}).then((u)=> {
    const { token, ...user } = u;
    sessionStorage.setItem(tokenKey, token);
    return user;
  }).catch((e)=> console.log(e))
}
