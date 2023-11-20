import axios from "axios"

//rawg username akasos pw codewithmosh1212!

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "fa2930ca38ec4ce4bed4f5b3c17c6f49"
    }
})

export default axiosInstance