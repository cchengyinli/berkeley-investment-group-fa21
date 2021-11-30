import { extendTheme } from "@chakra-ui/react"

const bigTheme = extendTheme({
  fonts: {
    heading: "Libre Franklin",
    body: "Libre Franklin",
  },
  colors: {
    primary: {
      orange: "#FF6600",
      dark: "#2B2541",
      yellow: "#FED800",
      stone: "#FED800",
      ice: "#F9FBFD",
      gray: "#7C788A",
      white: "#FFFFFF",
    },
    secondary: {
      meadow: "#7FB069",
      sand: "#E6AA68",
      dorian: "#F5F5F5",
      gold: "#F5F5F5",
      lake: "#3F88C5",
    },
  },
})

export default bigTheme
