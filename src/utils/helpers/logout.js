const logout = () => {
  window.localStorage.setItem('cryptologgedin', false);
  window.localStorage.setItem('cryptotoken', null);
  window.localStorage.setItem('cryptousername', null);
  this.forceUpdate();
};
export default logout;
