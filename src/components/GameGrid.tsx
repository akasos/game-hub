import React from "react"

import { SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import InfiniteScroll from "react-infinite-scroll-component"

import GameCard from "./GameCard"
import GameCardContainer from "./GameCardContainer"
import GameCardSkeleton from "./GameCardSkeleton"
import useGames, { Game } from "../hooks/useGames"

const GameGrid = () => {
  
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames()

  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  if (error) return <Text>{error.message}</Text>

  const fetchGameCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

  return (
    <InfiniteScroll
      dataLength={fetchGameCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Spinner/>}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading && skeletonArray.map(item =>
          <GameCardContainer key={item}>
            <GameCardSkeleton/>
          </GameCardContainer>
        )}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game: Game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}/>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default GameGrid