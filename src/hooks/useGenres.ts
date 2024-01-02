import { useQuery } from "@tanstack/react-query"
import ms from "ms"

import genres from "../data/genres"
import ApiClient from "../services/apiClient"

const apiClient = new ApiClient<Genre>("/genres")
export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: ms("24h"),
  initialData: genres
})

export default useGenres