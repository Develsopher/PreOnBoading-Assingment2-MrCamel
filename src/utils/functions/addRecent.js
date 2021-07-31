import deleteRecents from 'utils/functions/deleteRecent';

const addRecent = recent => {
  if (!window.localStorage.getItem('recents')) {
    window.localStorage.setItem(
      'recents',
      JSON.stringify(
        [].concat({
          id: 0,
          product: {
            id: recent.id,
            title: recent.title,
            brand: recent.brand,
            price: recent.price,
            image: recent.image,
            disLike: recent.disLike,
          },
          inquiriedAt: new Date(),
        })
      )
    );
    deleteRecents();
    return;
  }

  const recents = JSON.parse(window.localStorage.getItem('recents'));

  const existedRecent = recents.find(v => v.product.id === recent.id);
  if (existedRecent) {
    console.log(`${existedRecent.id}번 중복 발생!!`);
    recents.splice(existedRecent.id, 1, {
      ...existedRecent,
      inquiriedAt: new Date(),
    });

    window.localStorage.setItem('recents', JSON.stringify(recents));

    return;
  }

  const lastId = recents.length;

  recents.push({
    id: lastId,
    product: {
      id: recent.id,
      title: recent.title,
      brand: recent.brand,
      price: recent.price,
      image: recent.image,
      disLike: recent.disLike,
    },
    inquiriedAt: new Date(),
  });
  window.localStorage.setItem('recents', JSON.stringify(recents));

  return;
};

export default addRecent;
