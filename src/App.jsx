import smiley from '/src/assets/static/images/smiley.png';
import './App.css'
import Home from './components/Home';

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
      <Home data={mockData} />
    </>
  )
}

export default App
