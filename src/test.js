import React, { useState, useEffect } from 'react'

function counter() {
const [counter, setCounter] = useState(0)

const addClick = () => {
    setCounter(counter+1)
}

const minusClick = () => {
    setCounter(counter-1)
}

const reset = () => {
    setCounter(0)
}

useEffect(
    () => {
        let timer = setInterval(addClick, 1000);
        return (
            () => {
                clearInterval(timer)
            }
        )
    }
    ,[]

)


    return (
        <div>
          {counter}
          <button onClick={addClick}>+</button> 
          <button onClick={minusClick}>-</button> 
          <button onclick={reset}>reset</button>  
        </div>
    )
}