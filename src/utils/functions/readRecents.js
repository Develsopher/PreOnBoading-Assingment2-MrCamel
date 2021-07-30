const readRecents = () => JSON.parse(window.localStorage.getItem('recents'));

export default readRecents;
