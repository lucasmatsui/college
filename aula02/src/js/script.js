function validar() {

  var name = formSignUp.nome.value.trim();
  var name_error = document.getElementById("name_error");

  var email = formSignUp.email.value.trim();
  var senha = formSignUp.senha.value.trim();
  var rep_senha = formSignUp.rep_senha.value.trim();


  if (name == "") {
    name_error.classList.remove("danger");
    name_error.classList.add("warning");
    name_error.innerHTML = "Nome não pode estar vázio";
    formSignUp.nome.focus();
    return false;
  }

  if(name.length < 8) {
    name_error.classList.remove("warning");
    name_error.classList.add("danger");
    name_error.innerHTML = "";
    name_error.innerHTML = "O nome nao pode menos de "+name.length+"/8 caracteres";
    formSignUp.nome.focus();
    return false;
  }

  if (email == "") {
    name_error.classList.remove("danger");
    name_error.classList.add("warning");
    name_error.innerHTML = "";
    name_error.innerHTML = "Campo email está vazio!";
    formSignUp.email.focus();
    return false;
  }

  if (senha == "") {
    name_error.classList.remove("danger");
    name_error.classList.add("warning");
    name_error.innerHTML = "";
    name_error.innerHTML = "Campo senha está vazio!";
    formSignUp.senha.focus();
    return false;
  }

  if (rep_senha == "") {
    name_error.classList.remove("danger");
    name_error.classList.add("warning");
    name_error.innerHTML = "";
    name_error.innerHTML = "Campo confimar senha está vazio!";
    formSignUp.rep_senha.focus();
    return false;
  }

  if(senha !== rep_senha) {
    name_error.classList.remove("warning");
    name_error.classList.add("danger");
    name_error.innerHTML = "";
    name_error.innerHTML = "A Senha não é igual!";
    formSignUp.rep_senha.focus();
    return false;
  }



  return true;
}