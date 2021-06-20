import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Washing from "../Icons/Washing";

function WashCard() {
  return (
    <Box
      w="100%"
      h="150px"
      align="center"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ bg: "teal.400" }}
    >
      <NavLink exact to="/wash">
        <Box m="5" as="a">
          <Washing />
          <Text
            m="5"
            mt="0"
            textAlign="center"
            fontSize={{ base: "14px", md: "15px", lg: "20px" }}
            _hover={{ fontWeight: "bold" }}
          >
            Wash & Fold
          </Text>
        </Box>
      </NavLink>
    </Box>
  );
}

export default WashCard;
