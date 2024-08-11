import React from 'react'

const Input = ({text,placeholder,id}) => {
  return (
    <div>
      <input type={text} placeholder={placeholder} id={id}/>
    </div>
  )
}

export default Input
