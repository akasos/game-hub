import React from "react"

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/all"

import usePlatform from "../hooks/usePlatform"
import usePlatforms, { Platform } from "../hooks/usePlatforms"

interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatformId?: number
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
    
  const { data: platforms, error } = usePlatforms()
  const platform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{platform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {platforms?.results.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector