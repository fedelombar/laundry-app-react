import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function TailoringCard() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ bg: "teal.400" }}
    >
      <NavLink exact to="/tailoring">
        <Box m="5" as="a">
          <Heading m="5" mb="0" as="h4" size="md">
            Blog Post
          </Heading>
          <Text m="5" mt="0">
            My cool blog post
          </Text>
        </Box>
      </NavLink>
    </Box>
  );
}

export default TailoringCard;
