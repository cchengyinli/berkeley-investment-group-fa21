import { Button } from "@chakra-ui/react"
import React from "react"

export default {
  component: Button,
  title: "Components/Button",
}

export const Template = args => <Button {...args}>Button</Button>

export const Sample = Template.bind({})

Sample.args = {
  colorScheme: "blue",
}
