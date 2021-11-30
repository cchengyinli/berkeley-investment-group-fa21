import React from "react"
import { Link, Flex, HStack, Spacer, Box, Image } from "@chakra-ui/react"
import Logo from "../assets/Logo.svg"
import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
  return (
    <Box>
      <Flex>
        <Image src={Logo} w="150px" alt="" />
        <Spacer />
        <NavbarLinks />
      </Flex>
    </Box>
  )
}

export default Navbar
