import { useQuery } from "@tanstack/react-query"

import { FetchResponse } from "./useData"
import platforms from "../data/platforms"
import apiClient from "../services/apiClient"

export interface Platform {
  id: number,
  name: string,
  slug: string
}

const usePlatforms = () =>  useQuery({
  queryKey: ["platforms"],
  queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((response) => response.data),
  staleTime: 1000 * 60 * 60 * 24, // 30 days
  initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms