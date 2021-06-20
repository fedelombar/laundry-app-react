import React from "react";
import { HStack, Text, Container } from "@chakra-ui/react";

import DryCard from "../drycleaning/DryCard";
import TailoringCard from "../tailoring/TailoringCard";
import WashCard from "../washfold/WashCard";
export const DashboardScreen = () => {
  return (
    <Container>
      <Text fontSize="4xl" textAlign="center" py="10">
        Which service(s) do you need?
      </Text>
      <HStack spacing="16px" p="16px">
        <WashCard />

        <DryCard />

        <TailoringCard />
      </HStack>
    </Container>
  );
};
