import React from 'react';
import PieceGrid from './PieceGrid';
import { Heading, Flex, Spacer } from '@chakra-ui/react';


const Home = ({ data }) => {
  return (
    <>
      <Flex w="80%" paddingTop="50px" margin="auto" direction="column">
        <Heading marginBottom="10vh" fontFamily='Source Code Pro' fontWeight='regular'>Chuckie Coyote Art</Heading>
        <PieceGrid data={data} />
      </Flex>
    </>
  )
};

export default Home;
