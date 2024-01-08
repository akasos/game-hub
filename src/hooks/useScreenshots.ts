import { useQuery } from "@tanstack/react-query"

import Screenshot from "../entities/Screenshot"
import ApiClient from "../services/apiClient"

const useScreenshots = (gameId: number) => {
    
  const apiClient = new ApiClient<Screenshot>("/games/" + gameId + "/screenshots")

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll          
  })
    
}
export default useScreenshots