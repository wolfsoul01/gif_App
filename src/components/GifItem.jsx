/* eslint-disable react/prop-types */
export function GifItem ({ title, img }) {
  function handleClik () {
    navigator.clipboard.writeText(img)
  }

  return (
    <article className='gif-item'>
      <img src={img} alt='' width={300} />

      <div className='copy'>
        <button onClick={handleClik}>copy</button>
      </div>
    </article>
  )
}
