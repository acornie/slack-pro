import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { REQUEST } from "../constants/chat";
import { AuthContext } from "./AuthProvider";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const socket = useMemo(() => io(`${process.env.REACT_APP_BASE_URL}`, { extraHeaders: { token } }), []);
  const [isConnected, setIsConnected] = useState(false);
   const [changeicon, setchangeicon] = useState("message");
   const [actives, setactives] =useState("");
  const {auth, setAuth} = useContext(AuthContext);
  useMemo(() => {
    socket.on("auth", (data) => {
      setAuth(data.user);
    });
    return () => {
      socket.removeListener("auth", (data) => {
      setAuth(data.user);
      })
    }
  }, []);
  socket.on('connect', () => {
    setIsConnected(true);
  });

  socket.on('disconnect', () => {
    setIsConnected(false);
  });
  useEffect(() => {
    socket.emit("auth", {
      data: token
    })
  }, []);
  useEffect(() => {
    socket.emit(REQUEST.AUTH, token);

  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        socket,
        changeicon,
        setchangeicon,
        actives,
        setactives
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
