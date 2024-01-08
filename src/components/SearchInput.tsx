import React, { useRef } from "react"

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/all"
import { useNavigate } from "react-router-dom"

import useGameQueryStore from "../store"

const SearchInput = () => {

  const ref = useRef<HTMLInputElement>(null)
    
  const setSearchText = useGameQueryStore(s => s.setSearchText)

  const navigate = useNavigate()

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (ref.current) {
        setSearchText(ref.current.value)
        navigate("/game-hub")
      }
    }}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch/>
        </InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder='Search game...' variant="filled"/>
      </InputGroup>
    </form>
  )
}

export default SearchInput