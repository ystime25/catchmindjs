// eslint-disable-next-line no-undef
const socket = io("/");

const sendMessage = (message) => {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
};

const setNickname = (nickname) => {
  socket.emit("setNickname", { nickname });
};

const handleMessageNoti = (data) => {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
};

socket.on("messageNoti", handleMessageNoti);
