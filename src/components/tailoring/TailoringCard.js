import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Tailoring from "../Icons/Tailoring";

function TailoringCard() {
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
      <NavLink exact to="/tailoring">
        <Box m="5" as="a">
          <Tailoring />
          <Text
            m="5"
            mt="0"
            textAlign="center"
            fontSize={{ base: "14px", md: "15px", lg: "20px" }}
            _hover={{ fontWeight: "bold" }}
          >
            Tailoring
          </Text>
        </Box>
      </NavLink>
    </Box>
  );
}

export default TailoringCard;
