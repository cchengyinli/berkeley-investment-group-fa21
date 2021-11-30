import React from "react"
import { Link, HStack } from "@chakra-ui/react"

const NavbarLinks = () => {
  return (
    <HStack spacing="2.5em">
      <Link href="http://google.com">Home</Link>
      <Link href="http://google.com">Get Involved</Link>
      <Link href="http://google.com">Investment Fund</Link>
      <Link href="http://google.com">Our Network</Link>
      <Link href="http://google.com">Resources</Link>
      <Link href="http://google.com">Contact</Link>
    </HStack>
  )
}

export default NavbarLinks
