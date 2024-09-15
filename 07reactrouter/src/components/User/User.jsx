import React from 'react'

import { useParams } from 'react-router'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-orange-400 text-black text-3xl text-center py-5 '> {userid ? `User : ${userid} ` : "Author" }</div>
  )
}

export default User