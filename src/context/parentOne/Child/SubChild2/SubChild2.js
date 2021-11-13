import React, { useContext } from 'react';
import { demoContext } from '../../../DemoContext'

function SubChild2(props) {
    const { data2, responseFromContextChild2 } = useContext(demoContext)
    return (
        <div style={{ padding: '26px', background: 'white' }}>
            SubChild2 data = {data2}
            <input onChange={(e) => responseFromContextChild2(e.target.value)} />
        </div>
    );
}

export default SubChild2;