import updateRecent from './updateRecent';

const addRecent = recent => {
  if (!window.localStorage.getItem('recents')) {
    window.localStorage.setItem('recents', JSON.stringify([].concat(recent)));

    return;
  }
  const recents = JSON.parse(window.localStorage.getItem('recents'));

  const existedRecent = recents.find(v => v.id === recent.id);

  if (existedRecent) {
    updateRecent(existedRecent);
  }

  recents.push(recent);
  window.localStorage.setItem('recents', JSON.stringify(recents));

  return;
};

export default addRecent;
