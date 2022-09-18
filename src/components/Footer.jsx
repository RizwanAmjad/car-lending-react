import React from "react"
import { Box, Text } from "@chakra-ui/react"

function Footer(props) {
  return (
    <Box paddingY="4" bgColor="purple.600" color="white">
      <Text align="center">
        &copy; Car Lending System - All rights reserved!
      </Text>
    </Box>
  )
}

export default Footer
