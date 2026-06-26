import React from 'react'

export default function Greeting(props) {
  return (
    <div>
        <h3>hello,{props.fn} your age is {props.age}.</h3>
      
    </div>
  )
}
