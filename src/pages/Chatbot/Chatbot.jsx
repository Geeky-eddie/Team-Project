
import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
   
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 bg-cyan-500 text-white p-4 rounded-full cursor-pointer transition ${
        isChatOpen ? "bg-orange-500" : "hover:bg-cyan-600"
      }`}
    >
      <button onClick={handleChatToggle}>
        <FiMessageSquare className="text-2xl" />
      </button>
    </div>
  );
};

export default ChatButton;
