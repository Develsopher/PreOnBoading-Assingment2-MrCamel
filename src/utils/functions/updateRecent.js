const updateRecent = recent => {
  const recents = JSON.parse(window.localStorage.getItem('recents'));

  recents.splice(recent.id, 1, {
    ...recent,
    inquiriedAt: new Date(),
  });

  window.localStorage.setItem('recents', JSON.stringify(recents));

  return;
};

export default updateRecent;
