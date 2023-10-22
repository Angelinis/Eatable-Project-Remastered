import axios from 'axios';
import { BASE_URI} from "../../config";


export function Signup(body, action){
  return axios.post(BASE_URI+'/users', body)
  .then(function (response) {
    console.log(response);
    action ? action() : null;
  })
  .catch(function (error) {
    console.log(error);
  });
}

