import React, { useState } from "react";

// users name for assigning reandomly
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatSection = () => {
  // declaring messages and newMessage
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  //   sendMessage function to store a message and assigning random user name
  const sendMessage = () => {
    console.log("sendMessage called");
    if (newMessage.trim() !== "") {
      const randomAssign =
        user_list[Math.floor(Math.random() * user_list.length)];
      console.log(randomAssign);
      const message = {
        user: randomAssign,
        text: newMessage,
        likes: 0,
      }
      setMessages((prevMessages) => [message, ...prevMessages]);
      setNewMessage("");
    }
  };

  //   this function is increase the like count
  const handleLikeCount = (index) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index].likes++;
      return updatedMessages;
    });
  };

  return(
    <>
       <div class="flex flex-row justify-between bg-white">
      <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        <div class="border-b-2 py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        <div
          class="flex flex-row py-4 px-2 justify-center items-center border-b-2"
        >
          <div class="w-1/4">
            <img
              src="https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold"> Poland Office</div>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/otT2199XwI8/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Introduction</div>
          </div>
        </div>
       

        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">India Office</div>
          </div>
        </div>

        

        
      </div>


    <div className="w-full px-5 flex flex-col justify-around min-h-screen">
      <div className="flex flex-col-reverse justify-end">
        {/* mapping over messages */}
        {messages.map((message, index) => (
          
          <div key={index} className="mr-2 py-3 px-4 mb-8 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
            <span className="text-black mr-2">
              {message.user}: 
            </span>
            <span className="">{message.text}</span>
            <button onClick={() => handleLikeCount(index)}>
               {message.Likes}
            </button>
          </div>
      ))}
      </div>
    

      <div className="w-full flex items-center justify-end">
        <input
          className="flex-1 rounded-lg border-2 border-gray-600 px-4 py-2"
          type="text"
          placeholder="Type message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button
          className="mt-2 ml-4 mb-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={sendMessage}
          type="submit"
        >
          Send
        </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default ChatSection;
