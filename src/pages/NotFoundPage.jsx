import React from 'react'
import zoroLost from "../assets/descarga.jpg"

function NotFoundPage() {
  return (
    <div>
        <h1>Not Found. Parece ser que alguien se perdió...</h1>

        <img src={zoroLost} alt="" />
    </div>
  )
}

export default NotFoundPage