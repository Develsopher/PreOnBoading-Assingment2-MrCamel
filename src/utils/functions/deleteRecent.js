const deleteRecents = () => {
  const now = new Date();

  const TTL =
    (24 - now.getHours() - 1) * 60 * 60 +
    (60 - now.getMinutes() - 1) * 60 +
    (60 - now.getSeconds());

  setTimeout(() => {
    window.localStorage.clear();
  }, TTL);
};

export default deleteRecents;
