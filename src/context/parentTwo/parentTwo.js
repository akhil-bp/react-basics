import React, { useContext } from 'react';
import { demoContext } from '../DemoContext'

function ParentTwo(props) {
    const { data, data2 } = useContext(demoContext)
    return (
        <div style={{ padding: '26px', background: 'red' }}>
            parentTwo data = {data}
            <br/>
            parentTwo data2 = {data2}
        </div>
    );
}

export default ParentTwo;