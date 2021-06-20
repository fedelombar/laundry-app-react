import React from "react";
import { HStack, Text, Container, Box } from "@chakra-ui/react";

import DryCard from "../drycleaning/DryCard";
import TailoringCard from "../tailoring/TailoringCard";
import WashCard from "../washfold/WashCard";
export const DashboardScreen = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "25px", md: "40px", lg: "35x" }}
        textAlign="center"
        py="10"
        mx={4}
      >
        Which service(s) do you need?
      </Text>
      <HStack spacing="16px" p="16px">
        <WashCard />

        <DryCard />

        <TailoringCard />
      </HStack>
    </Box>
  );
};
