import React from 'react';
import { useMeasure } from 'react-use';
import { Handle } from 'reactflow';
import { icons } from './icons';



const HANDLE_BASE_STYLES = { position: 'absolute' };

const TOP_HANDLE_STYLES = { ...HANDLE_BASE_STYLES, left: '0' };
const BOTTOM_HANDLE_STYLES = { ...HANDLE_BASE_STYLES, left: '100%' };
const LEFT_HANDLE_STYLES = { ...HANDLE_BASE_STYLES, top: '100%' };
const RIGHT_HANDLE_STYLES = { ...HANDLE_BASE_STYLES, top: '0' };

const handleStylesMap = {
    top: TOP_HANDLE_STYLES,
    bottom: BOTTOM_HANDLE_STYLES,
    left: LEFT_HANDLE_STYLES,
    right: RIGHT_HANDLE_STYLES,
}

const textRhombus = {
    transform: 'rotate(-45deg)'
}

const customNodeStylesRhombus = {
    background: '#48484C',
    color: '#fff',
    textAlign: 'center',
    height: '8rem',
    width: '8rem',
    display: 'flex',
    alignItems: 'center',
    transform: 'rotate(45deg)',
    justifyContent: 'center',
    border: ` 1.25px solid #F1F1F1`,
}


const Rhombus = ({ data }) => {
    const { title, icon, variant, handles = [] } = data;
    const Icon = icons[icon];
    const [ref, { height, width }] = useMeasure();


    if (!height) {
        return <div style={customNodeStylesRhombus} ref={ref}>
            <div style={textRhombus}>
                <Icon />
                <p>{title}</p>
            </div>
            {handles.map(handle => <Handle key={handle.id} {...handle} style={handleStylesMap[handle.position]} />)}
        </div>
    }

    const value = Math.min(width, height) + 50;

    return (
        <div style={{ ...customNodeStylesRhombus, }}>
            <div style={textRhombus}>
                <Icon />
                <p>{title}</p>
            </div>
            {handles.map(handle => <Handle key={handle.id} {...handle} style={handleStylesMap[handle.position]} />)}
        </div>
    );
};

export default Rhombus;
