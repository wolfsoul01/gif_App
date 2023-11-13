import { useEffect, useState } from 'react'
import { api_key } from '../conts'

export function useGif (categ) {
  const [gif, setGif] = useState({
    load: true,
    data: []
  })

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${encodeURI(
        api_key
      )}&q=${categ}&limit=3`
    )
      .then(res => res.json())
      .then(({ data }) => {
        const gifResponse = data.map(item => {
          return {
            id: item.id,
            title: item.title,
            img: item.images.original.webp
          }
        })

        setGif({ load: false, data: gifResponse })
      })
  }, [categ])

  return gif
}
