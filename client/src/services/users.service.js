import axios from 'axios'


class UsersService {

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      //withCredentials: true
    })
  }

  getPets = () => this.instance.get('/') // Forced user in endpoint ([0])

}


export default UsersService
