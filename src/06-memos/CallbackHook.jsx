import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (value) => {
        setCounter((cvalue) => cvalue + value)
      },
      [],
    )

    useEffect(() => {
        //increment();
    }, [increment])
    
    
    return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment} />
    </>

    )
}
