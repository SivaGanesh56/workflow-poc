import React from 'react';
import { icons } from '../../react-flow/Shapes/icons';
import './chats.css';


const chats = [
    {
        author: {
            icon: 'avatar',
            name: 'user-a'
        },
        message: 'I want to know about my account balance',
        varaint: 'default',
        direction: 'left'
    },
    {
        author: {
            icon: 'sprinklr',
            name: 'sprinklr'
        },
        message: 'Please enter your mobile number',
        varaint: 'primary',
        direction: 'right'
    },
    {
        author: {
            icon: 'avatar',
            name: 'user-a'
        },
        message: '( * * * ) - ( * * * ) - * * * *',
        varaint: 'default',
        direction: 'left'
    },
    {
        author: {
            icon: 'sprinklr',
            name: 'sprinklr'
        },
        message: 'Please enter the OTP sent on :( *** ) - ( *** ) - 9842',
        varaint: 'dark',
        direction: 'right'
    }
]


const Chats = () => {
    return (
        <div className="chats-container">
            {[...chats, ...chats, ...chats].map((chat, id) => <Chat key={id} {...chat} />)}
        </div>
    )
};

const Chat = ({ direction, author, varaint, message }) => {
    const { icon } = author;
    const Icon = icons[icon];
    return <div className={`chat-conatiner ${direction}`}>
        <Icon />
        <div className={`chat-text ${varaint}`}>
            <span>{message}</span>
        </div>

    </div>
}

export default Chats;