import React from "react"
import { Link, HStack } from "@chakra-ui/react"

const NavbarLinks = () => {
  return (
    <HStack spacing={"2.5em"}>
      <Link>Home</Link>
      <Link>Get Involved</Link>
      <Link>Investment Fund</Link>
      <Link>Our Network</Link>
      <Link>Resources</Link>
      <Link>Contact</Link>
    </HStack>
  )
}

export default NavbarLinks
