import React from "react"

import { HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import logo from "../assets/logo.webp"

function NavBar() {
    
  return (
    <HStack padding="10px">
      <Link to="/game-hub">
        <Image src={logo} alt="logo" boxSize="60px" objectFit="cover"/>
      </Link>
      <SearchInput/>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar