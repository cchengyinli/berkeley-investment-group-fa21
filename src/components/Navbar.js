import React from "react"
import { Link, Flex, HStack, Spacer, Box, Image } from "@chakra-ui/react"
import Logo from "../assets/Logo.svg"

const Links = () => {
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

const Navbar = () => {
  return (
    <Box>
      <Flex>
        <Image src={Logo} w="150px" alt="" />
        <Spacer />
        <Links />
      </Flex>
    </Box>
  )
}

export default Navbar
