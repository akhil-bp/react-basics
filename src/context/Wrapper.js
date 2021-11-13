import React, { useState } from 'react';
import ParentOne from './parentOne/parentOne';
import ParentTwo from './parentTwo/parentTwo';

import { demoContext } from './DemoContext'

function Wrapper(props) {

    const [dummyData, setDummyData] = useState("akhil")
    const [dummyData2, setDummyData2] = useState("bp")

    const responseFromContextChildFunction = (inputText) => {
        console.log(inputText)
        setDummyData(inputText)
    }

    const responseFromContextChildFunction2 = (inputText) => {
        console.log(inputText)
        setDummyData2(inputText)
    }

    return (
        <demoContext.Provider value={{
            data: dummyData,
            data2: dummyData2,
            xyz: 'bla bla',
            xyz1: 'bla bla',
            responseFromContextChild: responseFromContextChildFunction,
            responseFromContextChild2: responseFromContextChildFunction2
        }} >
            <div style={{ padding: '26px', background: 'yellow' }} className="context-demo">
                Here we are passig data to subchild using context api, without using props drilling
                <ParentOne></ParentOne>
                <ParentTwo></ParentTwo>
            </div>
        </demoContext.Provider >
    );
}

export default Wrapper;