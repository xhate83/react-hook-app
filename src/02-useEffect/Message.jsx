import { useState } from "react"
import { useEffect } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})

    useEffect(() => {

        const onMouseMove = ( {x, y} ) => {
            // const coords = {x, y};
            setCoords({x, y});
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove); 
        }
    }, [])

    
  return (
    <>
        <h2>Usuario no existe</h2>
        {
            JSON.stringify(coords)
        }
    </>
  )
}
