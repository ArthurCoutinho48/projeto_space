function validarLogin(idlogin) {
  var regex = /^[a-zA-Z]{6}$/;
  if (regex.test(login)) {
      return true;
  } else {
      return false;
  }
}

// Exemplo de uso
var login = "abcXYZ";
if (validarLogin(login)) {
  console.log("Login válido!");
} else {
  console.log("Login inválido! O login deve ter exatamente 6 caracteres alfabéticos.");
}
