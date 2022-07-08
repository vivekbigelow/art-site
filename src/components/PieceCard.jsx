import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heading, Text, Flex, Spacer, Image, Box } from '@chakra-ui/react';

const PieceCard = ({ number, title, medium, image, year }) => {
  let location = useLocation();
  return (
    <>
      <Box className='container'>
        <Heading fontFamily='Source Code Pro' fontSize='2xl'>{number}. {title} - {medium}</Heading>
        <Image className='image' src={image} />
        <Flex direction="row">
          <Text fontSize="25px">{year}</Text>
          <Spacer />
          <Text fontSize="25px">
            <Link className="piece-card-link" to={location.pathname + `/${number}`}>Details</Link>
          </Text>
        </Flex>
      </Box>

      <style jsx="true">{`
        .container {
          border : 2px black solid;
          padding: 10px 40px;
          font-family: "Source Code Pro", Courier, monospace;
        }

        .image{
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          margin-bottom: 50px;
          width: 50%;
          width: 200px;
          height: 200px;
        }

        .piece-card-link{
          color: blue;
        } 

      `}</style>
    </>
  )
};

export default PieceCard;
