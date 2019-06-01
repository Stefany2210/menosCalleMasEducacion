
const changeRoute = (hash) => {
    console.log(hash);
    const mainSection = document.getElementById('main');
    mainSection.innerHTML = '';
  
    switch (hash) {
      case '#':
      case '':
      case '#/': {
        return mainSection.appendChild(components.login());
      }
    };



export const initRoute = () => {
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => changeRoute(window.location.hash))
  };