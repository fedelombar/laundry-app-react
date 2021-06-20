import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Header = (props) => {
  const { isOpen } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Laundry App
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <Button
          colorScheme="teal"
          variant="outline"
          borderColor="white"
          textColor="white"
          _hover={{ bg: "teal.400" }}
          marginRight={4}
        >
          Login
        </Button>
        <ShoppingCart />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          colorScheme="teal"
          variant="outline"
          borderColor="white"
          textColor="white"
          _hover={{ bg: "teal.400" }}
          marginRight={4}
        >
          Login
        </Button>

        <Badge color="secondary">
          <ShoppingCart />
        </Badge>
      </Box>
    </Flex>
  );
};

export default Header;
