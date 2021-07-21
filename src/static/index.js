// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("hello", () => console.log("선수 입장"));

socket.emit("helloEveryone");
