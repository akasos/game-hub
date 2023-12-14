import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { BsGlobe } from "react-icons/bs"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendoswitch } from "react-icons/si"

import { Platform } from "../hooks/useGames"

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

  const iconMap: { [key: string]: IconType } = {
    "pc": FaWindows,
    "playstation": FaPlaystation,
    "xbox": FaXbox,
    "ios": FaApple,
    "macos": FaApple,
    "linux": FaLinux,
    "android": FaAndroid,
    "nintendo": SiNintendoswitch,
    "web": BsGlobe,
    "iphone": MdPhoneIphone
  }

  return (
    <HStack marginY={1}>
      {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>)}
    </HStack>

  )
}

export default PlatformIconList