const handleMessageNoti = (data) => {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
};

export { handleMessageNoti };
