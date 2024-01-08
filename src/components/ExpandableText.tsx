import { useState } from "react"

import { Button, Text } from "@chakra-ui/react"

interface Props {
    children: string
}

function ExpandableText({ children }: Props) {
    
  const [isExpanded, setIsExpanded] = useState(false)
  const limit = 300
    
  if (!children) return null
    
  if (children.length <= limit) {
    return <Text>{children}</Text>
  }
    
  return (
    <>
      <Text>{isExpanded ? children : `${children.slice(0, limit)}...`} <Button
        size="xs"
        fontSize="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </Button></Text>
    </>
  )
}

export default ExpandableText