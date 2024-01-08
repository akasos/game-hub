import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

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
  getAll = async (config: AxiosRequestConfig) => {
    const response = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    return response.data
  }

  get = async (id: number | string) => {
    const response = await axiosInstance.get<T>(this.endpoint + "/" + id)
    return response.data
  }
}

export default ApiClient