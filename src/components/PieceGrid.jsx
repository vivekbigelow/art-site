import React from 'react';
import PieceCard from './PieceCard';

const PieceGrid = ({ data }) => {
  return (
    <div className='container'>
      {data.map((piece, pieceNumber) => (
        <PieceCard key={piece.id} number={pieceNumber + 1} title={piece.title} image={piece.image} year={piece.year} medium={piece.medium} />

      ))}
    </div>
  )
};

export default PieceGrid;