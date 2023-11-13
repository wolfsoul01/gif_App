import './App.css'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function App () {
  const [categorys, setCategorys] = useState(['Goku'])


  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Gif App </h1>

      <AddCategory setCategorys={setCategorys} />

      <main className='gif-cotainer'>
        {categorys.map(catg => {
          return <GifGrid key={catg} categ={catg} />
        })}
      </main>
    </>
  )
}

export default App
