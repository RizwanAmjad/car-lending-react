import React from "react"
import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import TextImage from "../components/TextImage"

import image from "../images/image3.jpg"

function Contact(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <TextImage image={image} text="Contact" />
      </Box>
    </motion.div>
  )
}

export default Contact
