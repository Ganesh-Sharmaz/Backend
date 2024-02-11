import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  

  return (
    <>
      <div className=' flex flex-col w-full h-screen bg-black justify-center items-center'>
        <h1 className=' shadow-xl flex bg-slate-800 text-white px-5 py-5 text-center justify-center rounded-lg text-4xl font-bold'>Frontend is Ready</h1>
        <p className=' shadow-xl bg-gray-500 px-2 py-2 rounded-xl mt-3 text-white'>Jokes: {jokes.length}</p>
        <div className=' mt-4 shadow-xl bg-slate-600 rounded-lg px-5 py-5 text-white flex flex-col items-start'>
        {
          jokes.map((joke, index) => (
            <div className='  w-full shadow-xl  px-5 py-5 text-white' key={joke.id}>
              <h3 className=' font-bold text-lg'>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
        </div>

      </div>
    </>
  )
}

export default App
