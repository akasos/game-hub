import React from "react"

import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"

import Genre from "../entities/Genre"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"

function GenreList() {

  const { data, isLoading, error } = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null

  if (isLoading) return <Spinner/>

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genre</Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image objectFit="cover" boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
              <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} onClick={() => setSelectedGenreId(genre.id)} fontSize="lg" variant="link">{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList