import { Message } from '../message/Message';

export const MessageList = ({ messages }) => {
    return (
        <div className="main">
            {messages.map((msg) => <Message author={msg.author} text={msg.text} key={msg.id} />)}
        </div>
    );
}