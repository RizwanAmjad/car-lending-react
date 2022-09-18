import { Box } from "@chakra-ui/react"
import React from "react"
import { motion } from "framer-motion"
import TextImage from "../components/TextImage"
import image from "../images/image1.jpg"

function Home(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <TextImage image={image} text="Home" />
      </Box>
    </motion.div>
  )
}

export default Home
