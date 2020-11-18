import axios from 'axios';
import APIServer from './APIServer';
const instanceAxios=axios.create({baseURL:APIServer.baseURL})
const instanceAuthenPost=axios.create({baseURL:"http://localhost:3002"})

export default {
    get:instanceAxios.get,
    post:instanceAxios.post,
    postAuth:instanceAuthenPost.post,
    getAuth:instanceAuthenPost.get
}