import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

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
      };
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

  return (
    <>
    {/* sidebar */}
      <div className="flex flex-row justify-between bg-cyan-100">
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          <div className="border-b-2 py-4 px-2">
            <input
              type="text"
              placeholder="search chatting"
              className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
            />
          </div>
          <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold"> Poland Office</div>
            </div>
          </div>
          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/otT2199XwI8/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">Introduction</div>
            </div>
          </div>

          <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
              <img
                src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                className="object-cover h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full">
              <div className="text-lg font-semibold">India Office</div>
            </div>
          </div>
        </div>
        {/* sidebar end */}

        <div className="bg-lime-50 w-full px-5 flex flex-col justify-evenly min-h-screen">
          <div className="flex flex-col-reverse justify-end">
            {/* mapping over messages */}
            {messages.map((message, index) => (
              <div className="flex justify-start mb-4">
                <div key={index}>
                  {/* message user span */}
                  <span className="text-black mr-2">
                    <img
                      className="object-cover h-8 w-8 rounded-full"
                      src="https://source.unsplash.com/otT2199XwI8/600x600"
                      alt=""
                    />
                    {message.user}:
                  </span>
                </div>

                {/* message text span */}
                <span className="mr-2 py-3 px-4 mb-8 bg-blue-500  rounded-tl-xl rounded-tr-xl rounded-br-xl text-white">
                  {message.text}
                </span>

                {/* button to manage like counts */}
                <button onClick={() => handleLikeCount(index)}>
                  {message.Likes}
                </button>
              </div>
            ))}
          </div>

          <div className="w-full flex items-center justify-end">
            <InputEmoji
              className="flex-1 rounded-lg border-2 borderRadius-21 border-gray-800 px-4 py-4 absolute inset-x-0 bottom-1 h-16 " 
              value={newMessage}
              onChange={(value) => setNewMessage(value)}
              cleanOnEnter
              placeholder="Type a message"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <div className="flex flex-col">
            <button
              className="mt-2 ml-2 mb-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={sendMessage}
              type="submit"
            >
              Send
            </button>
            </div>
          </div>
        </div>
      </div>
        </>

  );
};

export default ChatSection;
