import React, { useState } from 'react'
import { Handle, Position } from 'reactflow';

const LocalNode = ({ data, id }) => {
    const [color, setColor] = useState('#fff');

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div className='custom-local-node' style={{ background: color }}>
            <h4>{data.label}</h4>
            <input type="color" onChange={handleChange} />
            <Handle type="source" position={Position.Bottom} id={id} />
        </div>
    )
}

export default LocalNode