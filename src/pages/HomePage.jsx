import { Link } from "react-router-dom";
import { socket } from "../sicket";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    socket.on("message", (data) => {
      console.log(data);
    });
  }, []);
  return (
    <div>
      <h1>home page</h1>
      {/* <h2>massage {massage}</h2> */}
      <Link to={"/about"}>About page</Link>
    </div>
  );
};

export default HomePage;
