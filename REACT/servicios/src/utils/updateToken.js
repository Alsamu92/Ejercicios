export const updateToken = () => {
  const user = localStorage.getItem("user");
  if (user) {
    const parseUser = JSON.parse(user);
    return parseUser.token;
  }
};
//coge el token del local storage y lo devuelve