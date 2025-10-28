import React, { useState } from 'react'

const User = ({name}) => {
  // console.log(props);
  const [count,setcount] = useState(0);
  return (
    <div className='user-card'>
      <h1> Count : {count}</h1>
      <button onClick={() => {
        setcount(count+1)
      }}> Update</button>
        <h2>Name: {name}</h2>
        <h3>Location: Mumbai</h3>
        <h4>Contact: @ashish.0960</h4>
    </div>
  )
}

export default User;