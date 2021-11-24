import React from "react"
import Navbar from "../components/Navbar"
import { Button } from "@chakra-ui/react"

export default {
  component: Navbar,
  title: "Components/Navbar",
}

export const Template = args => <Navbar {...args}>Hello</Navbar>
