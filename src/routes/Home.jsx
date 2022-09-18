import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  GridItem,
  Grid,
  Text,
  HStack,
  Icon,
  VStack,
  Image,
} from "@chakra-ui/react"
import { FaCarAlt, FaRoad, FaSitemap } from "react-icons/fa"

import React from "react"
import { motion } from "framer-motion"

import AboutItem from "../components/AboutItem"
import MemberProfile from "../components/MemberProfile"
import TextImage from "../components/TextImage"
import image from "../images/image1.jpg"

import profiles from "../dummy-api/profiles.json"
import cars from "../dummy-api/cars.json"

function Home(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextImage image={image} text="Home" />
      <Flex
        marginX="auto"
        marginY="8"
        rounded="lg"
        overflow="hidden"
        width="50%"
        justifyContent="space-between"
      >
        <TextImage
          image={require("../images/cars-img/tesla.jpg")}
          text="Find!"
          width="50%"
          height="200"
        />
        <form>
          <Flex
            flexDirection="column"
            height="100%"
            justifyContent="space-evenly"
          >
            <FormControl>
              <Input placeholder="From" />
            </FormControl>
            <FormControl>
              <Input placeholder="To" />
            </FormControl>
            <FormControl>
              <Input placeholder="Date" />
            </FormControl>
            <FormControl>
              <Button colorScheme="purple">Find Cars</Button>
            </FormControl>
          </Flex>
        </form>
      </Flex>

      <AboutItem
        title="Welcome to Car Lending Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut purus mattis, blandit elit quis, malesuada sapien. Proin ac pulvinar ipsum. Pellentesque dignissim mollis mattis."
        image={require("../images/cars-img/offer-toyota.png")}
      />

      <Grid
        gridTemplateColumns="repeat(3, auto)"
        gap="15"
        marginX="20"
        marginY="5"
      >
        {cars.map(({ name, rent, model, transmission, milage, image }) => (
          <GridItem>
            <Box
              shadow="md"
              boxShadow="lg"
              border="1px"
              borderColor="purple.300"
              rounded="lg"
            >
              <VStack>
                <Image
                  src={require(`../images/cars-img/${image}`)}
                  width="100%"
                  height="300"
                  objectFit="cover"
                />
                <Text fontSize="2xl" fontWeight="medium">
                  {name}
                </Text>
                <Text fontWeight="medium">${rent}/Day</Text>
              </VStack>
              <HStack justifyContent="space-evenly" marginY="4">
                <VStack>
                  <Icon as={FaCarAlt} />
                  <Text>{model}</Text>
                </VStack>
                <VStack>
                  <Icon as={FaSitemap} />
                  <Text>{transmission}</Text>
                </VStack>
                <VStack>
                  <Icon as={FaRoad} />
                  <Text>{milage} kmpl</Text>
                </VStack>
              </HStack>
            </Box>
          </GridItem>
        ))}
      </Grid>

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

export default Home
