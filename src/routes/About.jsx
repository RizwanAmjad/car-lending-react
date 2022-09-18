import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import TextImage from "../components/TextImage"

import image from "../images/image2.jpg"
import AboutItem from "../components/AboutItem"
import MemberProfile from "../components/MemberProfile"

import profiles from "../dummy-api/profiles.json"

function About(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextImage image={image} text="About" />
      <AboutItem
        title="Welcome to Car Lending Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut purus mattis, blandit elit quis, malesuada sapien. Proin ac pulvinar ipsum. Pellentesque dignissim mollis mattis."
        image={require("../images/cars-img/offer-toyota.png")}
      />

      <AboutItem
        title="Lorem ipsum dolor sit amet."
        description="Morbi condimentum sit amet dui sit amet hendrerit. Proin luctus ac neque ac auctor. Praesent feugiat gravida tellus sed dictum. Sed tincidunt odio id orci sagittis aliquet. Aliquam neque urna, imperdiet eget nunc non, ornare."
        reversed
        image={require("../images/cars-img/nissan-offer.png")}
      />

      <Flex margin="8" justifyContent="space-around">
        {profiles.map(({ name, experience, image }) => (
          <MemberProfile
            name={name}
            experience={experience}
            image={require(`../images/avatars/${image}`)}
          />
        ))}
      </Flex>
    </motion.div>
  )
}

export default About
