import { useState } from "react"

export default function ChangeBackground() {
    const [color, setColor] = useState('yellow');

    return (
        <div className="w-screen h-screen flex justify-center items-end py-10 " style={{backgroundColor:color}}>
            
            <button className="border-2 rounded-xl w-[100px] mx-2 " style={{backgroundColor: 'blue'
            }} onClick={() => setColor('blue')}>Blue</button>
            <button className="border-2 rounded-xl w-[100px] mx-2 " style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>Red</button>
            <button className="border-2 rounded-xl w-[100px] mx-2 " style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>Green</button>
            <button className="border-2 rounded-xl w-[100px] mx-2" style={{ backgroundColor: 'orange' }} onClick={() => setColor('orange')}>Orange</button>
            <button className="border-2 rounded-xl w-[100px] mx-2" style={{ backgroundColor: 'pink' }} onClick={() => setColor('pink')}>Pink</button>
        </div>
    )
} 