import React from "react"

import { SimpleGrid, Image } from "@chakra-ui/react"

import useScreenshots from "../hooks/useScreenshots"

interface Props {
    gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
    
  const { data: screenshots, error, isLoading } = useScreenshots(gameId)
    
  if (isLoading) return null
    
  if (error) throw error
    
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt="Screenshot"
          style={{ width: "100%" }}
        />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots