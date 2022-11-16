import axios from 'axios';

export const RequestsAPI = {
   statusPost(status: boolean ){
    return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`,{success: status})

  }
}