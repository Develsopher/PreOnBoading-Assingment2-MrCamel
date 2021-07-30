import deleteRecents from 'utils/functions/deleteRecent';

const addRecent = recent => {
  if (!window.localStorage.getItem('recents')) {
    window.localStorage.setItem(
      'recents',
      JSON.stringify(
        [].concat({ id: 0, productId: recent.id, inquiriedAt: new Date() })
      )
    );
    deleteRecents();
    return;
  }

  const recents = JSON.parse(window.localStorage.getItem('recents'));

  const existedRecent = recents.find(v => v.productId === recent.id);
  if (existedRecent) {
    console.log('enter');
    recents.splice(existedRecent.id, 1, {
      ...existedRecent,
      inquiriedAt: new Date(),
    });

    window.localStorage.setItem('recents', JSON.stringify(recents));

    return;
  }

  const lastId = recents.length;

  recents.push({
    ...recent,
    productId: recent.id,
    id: lastId,
    inquiriedAt: new Date(),
  });
  window.localStorage.setItem('recents', JSON.stringify(recents));

  return;
};

export default addRecent;
