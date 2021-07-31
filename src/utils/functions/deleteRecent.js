const deleteRecents = () => {
  const now = new Date();

  const TTL =
    (24 - now.getHours() - 1) * 60 * 60 +
    (60 - now.getMinutes() - 1) * 60 +
    (60 - now.getSeconds()) * 1000;

  const timerId = setTimeout(() => {
    window.localStorage.clear();
    clearTimeout(timerId);
  }, TTL);
};

export default deleteRecents;
