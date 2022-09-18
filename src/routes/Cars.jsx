import React from "react"
import { motion } from "framer-motion"

function Cars(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>Cars</div>
    </motion.div>
  )
}

export default Cars
