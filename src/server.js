import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 5000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleConnection = () => {
  console.log(`✅ Server online at: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleConnection);

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNoti", {
      message,
      nickname: socket.nickname || "anon",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
