import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    name: string
    message: string
    time: string
    avatar: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.all}>
            <div className={s.gridContainer}>
                <div className={s.block}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={s.corner}>
                    <div className={s.circle}>

                    </div>

                </div>
                <div className={s.boxMessage}>

                    <div className={s.MessageContainer}>
                        <div className={s.name}>{props.name}</div>
                        <div className={s.message}>{props.message}</div>
                        <div className={s.time}>{props.time}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Message
