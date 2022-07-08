import React from "react";
import { Outlet } from "react-router-dom";
import { Heading, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Flex w="80%" paddingTop="50px" margin="auto" direction="column">
        <Heading
          marginBottom="10vh"
          fontFamily="Source Code Pro"
          fontWeight="regular"
        >
          Chuckie Coyote Art
        </Heading>
        <Outlet />
      </Flex>
    </>
  );
};

export default Home;
