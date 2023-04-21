import React, { useState } from 'react'

function Ahmed() {
    return (
        <div>
            <h1>Ahmed</h1>
            <h1>Ahmed</h1>
            <h1>Ahmed</h1>
            <h1>Ahmed</h1>
            <h1>Ahmed</h1>
        </div>
    )
}
function Raza() {
    return (
        <div>
            <h1>Raza</h1>
            <h1>Raza</h1>
            <h1>Raza</h1>
            <h1>Raza</h1>
            <h1>Raza</h1>
        </div>
    )
}

export default function App() {
    const data = [
        { gender: "Male" },
        { gender: "feMale" },
        { gender: "kids" },
        { gender: "boys" },
    ]


    // head = "Full Stack Developer"
    let [count, setCount] = useState(1)
    // const [dataa, setDataa] = useState({gender:'Male',name:'Ahmed'})
    // const [color, setColor] = useState('green')
    return (
        <div>
            {count == 1 && (
                <Ahmed />
            )
            }
            {count == 2 && (
                <Raza />
            )}
            <button onClick={() => setCount(1)}>first</button>
            <button onClick={() => setCount(2)}>second</button>
        </div>
    )
}
