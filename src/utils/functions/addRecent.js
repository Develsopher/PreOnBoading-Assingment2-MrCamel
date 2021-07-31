import deleteRecents from 'utils/functions/deleteRecent';
import updateRecent from './updateRecent';

const addRecent = recent => {
  const recents = JSON.parse(window.localStorage.getItem('recents'));

  if (!recents) {
    window.localStorage.setItem(
      'recents',
      JSON.stringify(
        [].concat({
          id: 0,
          product: recent,
          inquiriedAt: new Date(),
        })
      )
    );
    deleteRecents();
    return;
  }

  const existedRecent = recents.find(v => v.product.id === recent.id);
  if (existedRecent) {
    console.log(`${existedRecent.id}번 중복 발생!!`);
    updateRecent(existedRecent);
    return;
  }

  const lastId = recents.length;

  recents.push({
    id: lastId,
    product: recent,
    inquiriedAt: new Date(),
  });
  window.localStorage.setItem('recents', JSON.stringify(recents));

  return;
};

export default addRecent;
