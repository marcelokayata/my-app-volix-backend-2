const login = (req, res) => {
  // Lógica de autenticación aquí
  res.send("Login Route");
}

const register = (req, res) => {
  // Lógica de registro aquí
  res.send("Register Route");
};  

module.exports = {
  login,
  register
}