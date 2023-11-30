import React from 'react'

export default function Button({ text, handleClick}) {
  return (
    <button style={{
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '0.5rem',
        borderRadius: '5px',
      }} onClick={handleClick}>{text}</button>
  )
}
