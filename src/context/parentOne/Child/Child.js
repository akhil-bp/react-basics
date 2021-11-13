import React, { useContext } from 'react';
import SubChild from './SubChild/SubChild';
import SubChild2 from './SubChild2/SubChild2';

function Child(props) {
    return (
        <div style={{ padding: '26px', background: 'blue' }}>
            Child
            <SubChild></SubChild>
            <SubChild2></SubChild2>
        </div>
    );
}

export default Child;