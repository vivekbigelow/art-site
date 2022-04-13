import "./App.css";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    console.log('effect')
    axios.get("http://localhost:3001/cards").then((response) => {
      console.log("promise fulfilled");
      setCards(response.data);
    });
  }, [])
  console.log('render', cards.length, 'cards');
  
  return (
    <>
      <ChakraProvider><Home data={cards} /></ChakraProvider>
    </>
  );
}

export default App;
