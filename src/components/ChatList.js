import React from 'react'
import Chat from './Chat';


function ChatList() {
    return (
        <div className="chatList">
            <Chat
                name="Dolly Parton"
                message="Read a book!"
                timestamp={Date()}
                profilePic="https://media4.s-nbcnews.com/j/newscms/2016_50/1815336/161130-dolly-parton-1120p_1c7ca8f654cf74daef6162a8d6eeb0a6.fit-760w.jpg" />
            <Chat
                name="Lady Gaga"
                message="When can we meat?"
                timestamp={Date()}
                profilePic="https://api.time.com/wp-content/uploads/2016/08/lady-gaga-meat-dress-hot-pot.jpg" />
            <Chat
                name="Baby Yoda"
                message="My name is Grogu!?"
                timestamp={Date()}
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85rkwNhG3uWitHDxl-Zmn-mHIvQ6wxpXuwg&usqp=CAU" />
        </div>
    )
}

export default ChatList
