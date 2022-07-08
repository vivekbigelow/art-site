import React, { useState } from "react";
import axios from "axios";

const PieceForm = () => {
  const [newPiece, setNewPiece] = useState({ title: "", medium: "", year: "" });

  const addPiece = (event) => {
    event.preventDefault();
    console.log("newPiece", newPiece);
    const pieceObject = {
      title: newPiece.title,
      year: newPiece.year,
      medium: newPiece.medium,
      image: "/src/assets/static/images/smiley.png",
    };

    axios.post("http://localhost:3001/cards", pieceObject).then((response) => {
      setPieces(pieces.concat(response.data));
    });

    setNewPiece({ title: "", medium: "", year: "" });
  };

  const handleTitleChange = (e) => {
    let updatedValue = {};
    updatedValue = { title: e.target.value };
    setNewPiece((newPiece) => ({ ...newPiece, ...updatedValue }));
  };

  const handleMediumChange = (e) => {
    let updatedValue = {};
    updatedValue = { medium: e.target.value };
    setNewPiece((newPiece) => ({ ...newPiece, ...updatedValue }));
  };

  const handleYearChange = (e) => {
    let updatedValue = {};
    updatedValue = { year: e.target.value };
    setNewPiece((newPiece) => ({ ...newPiece, ...updatedValue }));
  };

  return ( 
    <form onSubmit={addPiece}>
        <label for="title">Title:</label>
        <input
          value={newPiece.title}
          name="title"
          onChange={handleTitleChange}
        />
        <label for="medium">Medium:</label>
        <input
          value={newPiece.medium}
          name="medium"
          onChange={handleMediumChange}
        />
        <label for="year">Year:</label>
        <input
          value={newPiece.year}
          name="year"
          onChange={handleYearChange}
        />
        <button type="submit">Add New Piece</button>
    </form>
  )
  };

export default PieceForm;
