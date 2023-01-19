import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid'
import './App.css';

const socket = io.connect('http://localhost:5000');

function App() {

  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  const user = nanoid(5);

  useEffect(() => {
    socket.on("chat", payload => {
      setChats([...chats, payload]);
    })
  })

  const submitHandler = e => {
    e.preventDefault();
    if (!message) return;
    else {
      socket.emit("chat", { message, user })
      setMessage("");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Type message..." value={message} onChange={e => setMessage(e.target.value)} />
          <button type="submit">sent</button>
        </form>
        <div className='chat_container'>
          {chats.length === 0 ? 'No Messages :(' : chats.map((chat) => <p><b>{chat.user}:</b> {chat.message}</p>)}
        </div>
        <p className='explain'>
        This input box communicates with Socket.io, which listens to the browser event and returns the chats.
        </p>
      </header>
    </div>
  );
}

export default App;
