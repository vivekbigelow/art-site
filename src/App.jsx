import smiley from '/src/assets/static/images/smiley.png';
import './App.css'
import Home from './components/Home';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const mockData = [
    {
      title: "Spastic Bombastic",
      year: '2022',
      medium: 'Music',
      image: smiley,
      id: 1
    },
    {
      title: "Spastic Bombastic",
      year: '2022',
      medium: 'Music',
      image: smiley,
      id: 2
    },
    {
      title: "Spastic Bombastic",
      year: '2022',
      medium: 'Music',
      image: smiley,
      id: 3
    },
    {
      title: "Spastic Bombastic",
      year: '2022',
      medium: 'Music',
      image: smiley,
      id: 4
    },
    {
      title: "Spastic Bombastic",
      year: '2022',
      medium: 'Music',
      image: smiley,
      id: 5
    },
    {
      title: "Spastic Bombastic",
      year: '2022',
      medium: 'Music',
      image: smiley,
      id: 6
    },
  ]
  return (
    <>
      <ChakraProvider>
        <Home data={mockData} />
      </ChakraProvider>
    </>
  )
}

export default App
