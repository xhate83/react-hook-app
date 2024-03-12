import { useState } from "react"

export const useCounter = (iniitialValue = 10) => {

    const [counter, setCounter] = useState(iniitialValue);

    const decrement = (value = 1) => {
        setCounter(counter - value);
        
    }
    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const reset = () => {
        setCounter(iniitialValue)
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}