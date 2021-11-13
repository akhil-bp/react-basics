import React, { useContext } from 'react';
import { demoContext } from '../../../DemoContext'

function SubChild(props) {
    const { data, responseFromContextChild } = useContext(demoContext)
    return (
        <div style={{ padding: '26px', background: 'white' }}>
            SubChild data = {data}
            <input onChange={(e) => responseFromContextChild(e.target.value)} />
        </div>
    );
}

export default SubChild;