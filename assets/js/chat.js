import { getSocket } from "./sockets.js";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class= "author ${nickname ? "other" : "self"}"> ${
    nickname ? nickname : "You"
  }:</span> ${text}
  `;
  messages.appendChild(li);
};

const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  //error with emit
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
