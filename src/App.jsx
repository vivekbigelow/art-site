import "./App.css";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([])
  const [newPiece, setNewPiece] = useState({})

  const addPiece = (event) => {
    event.preventDefault()
    const pieceObject = {
      title: newPiece.title,
      year: newPiece.year,
      medium: newPiece.medium,
      image: "/src/assets/static/images/smiley.png",
    };

    axios
    .post("http://localhost:3001/cards", pieceObject)
    .then(response => {
      setCards(cards.concat(response.data))
    })

    setNewPiece({})
  }

  const handleNotChange = (event) => {
    setNewPiece(event.target.value)
  }

  

  useEffect(() => {
    // console.log('effect')
    axios
    .get("http://localhost:3001/cards")
    .then((response) => {
      // console.log("promise fulfilled");
      setCards(response.data);
    });
  }, [])
  //console.log('render', cards.length, 'cards');
  
  return (
    <>
      <ChakraProvider>
        <Home data={cards} />
        <form onSubmit={addPiece}>
          <label for="title">Title:</label>
          <input
            value={newPiece.title}
            name="title"
            onChange={handleNotChange}
          />
          <label for="medium">Medium:</label>
          <input
            value={newPiece.medium}
            name="medium"
            onChange={handleNotChange}
          />
          <label for="year">Year:</label>
          <input
            value={newPiece.year}
            name="year"
            onChange={handleNotChange}
          />
          <button type="submit">Save</button>
        </form>
      </ChakraProvider>
    </>
  );
}

export default App;
