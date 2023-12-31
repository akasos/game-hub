import React from "react"

import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import CriticScore from "./CriticScore"
import Emoji from "./Emoji"
import PlatformIconList from "./PlatformIconList"
import  Game from "../entities/Game"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}/>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/game-hub/games/" + game.slug}>
            {game.name}
          </Link>
          <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>

  )
}

export default GameCard