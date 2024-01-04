import React from "react"

import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {BsChevronDown} from "react-icons/all"

import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"

function PlatformSelector() {
    
  const { data: platforms, error } = usePlatforms()
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId )
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{platform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector