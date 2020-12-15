const server = require("http").createServer();
const ioServer = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const connectDB = require("./config/database")
const {port, newChatEventMessage} = require("./config")

connectDB()
ioServer.on("connection", (socket) => {
  // Join a conversation
  const {roomId} = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(newChatEventMessage, (data) => {
    ioServer.in(roomId).emit(newChatEventMessage, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});