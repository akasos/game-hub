import axios, { AxiosRequestConfig } from "axios"

import { FetchResponse } from "../hooks/useData"

//rawg username akasos pw codewithmosh1212!
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa2930ca38ec4ce4bed4f5b3c17c6f49"
  }
})

class ApiClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(response => response.data)
  }
}

export default ApiClient