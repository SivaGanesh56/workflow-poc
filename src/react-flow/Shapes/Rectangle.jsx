import React from 'react'
import { Handle } from 'reactflow';
import { icons } from './icons';

const Rectangle = ({ data }) => {
    const { title, description, icon, variant, handles = [] } = data;
    const Icon = icons[icon];

    return (
        <div className={`custom-node rectangle ${variant}`}>
            <Icon />
            <div className="info">
                <div className='info-title'>{title}</div>
                <p className='info-text'>{description}</p>
            </div>

            {handles.map((handle, idx) => <Handle key={handle.id} type={handle.type} position={handle.position} id={handle.id} />)}

        </div>
    )
}

export default Rectangle;