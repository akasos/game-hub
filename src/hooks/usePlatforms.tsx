import { useQuery } from "@tanstack/react-query"

import platforms from "../data/platforms"
import ApiClient from "../services/apiClient"

const apiClient = new ApiClient<Platform>("/platforms/list/parents")

export interface Platform {
  id: number,
  name: string,
  slug: string
}

const usePlatforms = () =>  useQuery({
  queryKey: ["platforms"],
  queryFn: apiClient.getAll,
  staleTime: 1000 * 60 * 60 * 24, // 30 days
  initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms