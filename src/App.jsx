import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [messages, setMessages] = useState([]);
    const [messagesMapped, setMessagesMapped] = useState([]);

    function sendMessage() {
        fetch('https://mission5.nathan.test/api/send')
            .then(res => res.json())
            .then(res => console.log(res));
    }

    function getMessages() {
        fetch('https://mission5.nathan.test/api/get')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMessages(res);
            });
    }

    useEffect(() => {
        const mapped = messages.map((message, id) => {
            if (!message) return;
            console.log(message);
            return <p key={id}>{message.message}</p>;
        });
        setMessagesMapped(mapped);
    }, [messages]);

    return (
        <>
            <button onClick={sendMessage}>Send Message</button>
            <button onClick={getMessages}>Get Messages</button>
            {messagesMapped}
        </>
    )
}

export default App
