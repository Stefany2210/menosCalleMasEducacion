
export const initRoute = () => {
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => changeRoute(window.location.hash))
  };