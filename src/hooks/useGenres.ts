import { useQuery } from "@tanstack/react-query"

import { FetchResponse } from "./useData"
import genres from "../data/genres"
import apiClient from "../services/apiClient"

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(response => response.data),
  staleTime: 1000 * 60 * 60 * 24,  // 1 day
  initialData: { count: genres.length, results: genres }
})

export default useGenres