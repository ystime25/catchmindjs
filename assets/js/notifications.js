const body = document.querySelector("body");

const initNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

const handleNewUser = ({ nickname }) => {
  initNotification(`${nickname} just joined`, "rgb(76, 217, 100)");
};

const handleDisconnected = ({ nickname }) => {
  initNotification(`${nickname} has left the game`, "rgb(255, 59, 48)");
};

export { handleNewUser, handleDisconnected };
