import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import socket from "../socket";

const HomePage = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.on("message", (data) => {
      setMessage(data);
      console.log("Received message from server:", data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    console.log("click");
    socket.emit("message", "I am resan");
  };
  return (
    <div>
      <h1>home page</h1>
      <button onClick={sendMessage}>Send message</button>
      <h2>massage {message}</h2>
      <Link to={"/about"}>About page</Link>
    </div>
  );
};

export default HomePage;
