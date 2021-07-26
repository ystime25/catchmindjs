import { handleMessageNoti } from "./chat";

// eslint-disable-next-line no-undef
const socket = io("/");

const sendMessage = (message) => {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
};

const setNickname = (nickname) => {
  socket.emit("setNickname", { nickname });
};

socket.on("messageNoti", handleMessageNoti);

console.log("hello gulp");
