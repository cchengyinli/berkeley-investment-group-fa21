import { Box, Flex, Image, Spacer } from "@chakra-ui/react"
import Logo from "../assets/Logo.svg"
import NavbarLinks from "./NavbarLinks"
import React from "react"

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
