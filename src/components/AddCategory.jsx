/* eslint-disable react/prop-types */
import { useState } from 'react'
export function AddCategory ({ setCategorys }) {
  const [input, setInput] = useState('')

  function handleChange ({ target }) {
    setInput(target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    if ((input.length == 0)) return

    setCategorys(e => [ input,...e])
    setInput('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleChange} />
        <button>Buscar</button>
      </form>
    </>
  )
}
