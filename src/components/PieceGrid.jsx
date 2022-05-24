import React from 'react';
import PieceCard from './PieceCard';
import { Grid, GridItem } from '@chakra-ui/react';

const PieceGrid = ({ data }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {data.map((piece, pieceNumber) => (
        <GridItem key={piece.id}>
          <PieceCard
            number={pieceNumber + 1}
            title={piece.title}
            image={piece.image}
            year={piece.year}
            medium={piece.medium}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PieceGrid;