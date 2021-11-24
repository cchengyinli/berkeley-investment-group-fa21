import { customTheme, Fonts } from '../src/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={customTheme}>
      <Fonts />
      <Story />
    </ChakraProvider>
  ),
];