import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"

import { Game } from "../entities/Game"
import ApiClient, { FetchResponse } from "../services/apiClient"
import useGameQueryStore from "../store"

const apiClient = new ApiClient<Game>("/games")

const useGames = () => {

  const gameQuery = useGameQueryStore(s => s.gameQuery)
    
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      } }),
    staleTime: ms("24hrs"),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined
    }

  })
}

export default useGames