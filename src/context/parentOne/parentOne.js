import React, { useContext } from 'react';
import { demoContext } from '../DemoContext'
import Child from './Child/Child';

function ParentOne(props) {
    const { data, data2 } = useContext(demoContext)
    return (
        <div style={{ padding: '26px', background: 'red' }}>
            parentOne data = {data}
            <br/>
            parentOne data2 = {data2}
            <Child></Child>
        </div>
    );
}

export default ParentOne;