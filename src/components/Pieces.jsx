import React from "react";
import PieceGrid from "./PieceGrid";
import PieceForm from "./PieceForm";

const Pieces = ({ data }) => {
  return (
    <>
      <PieceGrid data={data} />
      <PieceForm />
    </>
  );
};

export default Pieces;
