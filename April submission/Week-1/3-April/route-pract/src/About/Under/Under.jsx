import React from 'react'
import { useParams } from 'react-router-dom';

const Under = () => {
    const { id } = useParams();

  return (
    <div>
      This is under the About Page.
      id = {id}
    </div>
  )
}

export default Under
