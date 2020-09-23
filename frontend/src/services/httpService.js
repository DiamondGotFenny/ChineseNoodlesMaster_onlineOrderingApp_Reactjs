import axios from 'axios';
import APIServer from './APIServer';
const instanceAxios=axios.create({baseURL:APIServer.baseURL})

export default {
    get:instanceAxios.get
}