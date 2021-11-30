import React from "react"
import { Button } from "@chakra-ui/react"

export default {
  component: Button,
  title: "Components/Button",
}

export const Template = args => <Button {...args}>Button</Button>

export const Sample = Template.bind({})

Sample.args = {
  colorScheme: "blue",
}
