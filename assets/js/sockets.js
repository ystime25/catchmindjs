import { handleNewUser } from "./notifications";

let socket = null;

const getSocket = () => {
  socket;
};

const updateSocket = (aSocket) => {
  socket = aSocket;
};

const initSockets = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
};

export { getSocket, initSockets, updateSocket };
