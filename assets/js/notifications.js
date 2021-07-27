const notifications = document.getElementById("jsNotifications");

const handleNewUser = ({ nickname }) => {
  console.log(nickname, "just joined");
};

export { handleNewUser };
