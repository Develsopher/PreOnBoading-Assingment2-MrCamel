const updateRecent = recent => {
  console.log(recent);

  const updatedRecent = { ...recent, inquiriedAt: new Date() };
};

export default updateRecent;
