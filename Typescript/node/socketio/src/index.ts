import { Server } from "socket.io";
import { io } from "socket.io-client";

const server = new Server(3000);
server.on("connection", (socket) => {
  socket.on("chat", (msg: string) => { server.emit("chat", `server heard: ${msg}`); });
});

const client = io("http://localhost:3000");
client.on("connect", () => { client.emit("chat", "hello"); });
client.on("chat", (msg: string) => {
  console.log(msg);
  client.close();
  void server.close();
});
