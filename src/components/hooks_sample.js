//components as functions

import React, { useState, useEffect } from 'react';
// import context from './context'

export default function Greeting(props) {

    const [name, setName] = useState('initial value');
    const [surname, setSurName] = useState('initial value surname');

    const width = useWindowWidth();
    const title = useWindowTitle("akhil");

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeSurName(e) {
        setSurName(e.target.value)
    }

    // function handleResize() {
    //     setWidth(window.innerWidth)
    // }


    // useEffect(() => {
    //     document.title = name
    // })

    // const [width, setWidth] = useState('0');
    // useEffect(() => {
    //     window.addEventListener('resize', handleResize)
    //     return () => {//unsebscribe here // cleanup
    //         window.removeEventListener('resize', handleResize)
    //     }
    // })

    return (
        <div>

            <div class='box'>
                <h3>{name}</h3>
                <input value={name} onChange={handleChangeName} />
            </div>

            <div class='box'>
                <h3>{surname}</h3>
                <input value={surname} onChange={handleChangeSurName} />
            </div>

            <div class='box'>
                <h3>window width: {width}</h3>
                <input value={width} />
            </div>

        </div>
    )

    function useWindowTitle(name) {
        useEffect(() => {
            document.title = name
        })
    }

    function useWindowWidth() { //custom hook start with use
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {

            const handleResize = () => setWidth(window.innerWidth)

            window.addEventListener('resize', handleResize)
            return () => {//unsebscribe here // cleanup
                window.removeEventListener('resize', handleResize)
            }

        })
        return width
    }

}
