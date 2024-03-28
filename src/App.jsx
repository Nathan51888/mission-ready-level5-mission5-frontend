import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [messages, setMessages] = useState([]);
    const [messagesMapped, setMessagesMapped] = useState([]);
    const backendHost = process.env.BACKEND_SERVICE_HOST || 'localhost';
    const backendPort = process.env.BACKEND_SERVICE_PORT || 3000;

    function sendMessage() {
        fetch(`http://${backendHost}:${backendPort}/send`)
            .then(res => res.json())
            .then(res => console.log(res));
    }

    function getMessages() {
        fetch(`http://${backendHost}:${backendPort}/get`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMessages(res);
            });
    }

    useEffect(() => {
        const mapped = messages.map((message, id) => {
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
