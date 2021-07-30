const addRecent = recent => {
  if (!window.localStorage.getItem('recents')) {
    window.localStorage.setItem('recents', JSON.stringify([].concat(recent)));

    return;
  }
  const recents = JSON.parse(window.localStorage.getItem('recents'));

  //   if (recents.includes(v => v.id === recent.id)) {
  //     updateRecent(new Date());
  //   }

  recents.push(recent);
  window.localStorage.setItem('recents', JSON.stringify(recents));

  return;
};

export default addRecent;
