import { useInfiniteQuery } from "@tanstack/react-query"

import { Platform } from "./usePlatforms"
import { GameQuery } from "../App"
import ApiClient, { FetchResponse } from "../services/apiClient"

const apiClient = new ApiClient<Game>("/games")

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[]
    metacritic: number,
    rating_top: number,
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({ pageParam = 1 }) => apiClient.getAll({
    params: { 
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam
    } }),
  staleTime: 1000 * 60 * 5,
  getNextPageParam: (lastPage, pages) => {
    return lastPage.next ? pages.length + 1 : undefined
  }

})
export default useGames