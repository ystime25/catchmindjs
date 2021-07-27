import { handleDisconnected, handleNewUser } from "./notifications";

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
  aSocket.on(events.disconnected, handleDisconnected);
};

export { getSocket, initSockets, updateSocket };
