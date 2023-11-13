/* eslint-disable react/prop-types */
import { useGif } from '../hooks/useGif'
import { GifItem } from './GifItem'

export function GifGrid ({ categ }) {
  const { data: images, load } = useGif(categ)

  return (
    <section>
      <h4 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
        {categ}
      </h4>
      <hr />

      <aside className='grid-gif'>
        {load ? (
          <span>Cargando...</span>
        ) : (
          images.map(({ id, title, img }) => (
            <GifItem img={img} title={title} key={id} />
          ))
        )}
      </aside>
    </section>
  )
}
