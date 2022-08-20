import React, {useState, useEffect} from 'react'

export const Student = (props) => {
    const [name, setName] = useState("Raman Sharma")
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const increement = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count -1)
    }

    useEffect(() => {
        setTimeout(()=>{
            setCount1(count => count+1)
        }, 4000)
    
    })

   
    
  return (
    <div>

        <h1>This is a Student component</h1>

        <h3>Use State value Acces  :  {name}</h3>
        <h2>Value count by useState  : {count}</h2>
        <h2>Value count .... render by useEffect : {count1}</h2>
        <button onClick={increement}   >Increment</button>
        <button onClick={decrement}   >Decrement</button>

        <p>{props.name}</p>

        
    </div>
  )
}
