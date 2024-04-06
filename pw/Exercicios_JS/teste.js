document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Verifica se os campos obrigatórios estão preenchidos
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (nome.trim() === "") {
      document.getElementById("name").style.border = "2px solid red";
    } else {
      document.getElementById("name").style.border = "";
    }

    if (email.trim() === "") {
      document.getElementById("email").style.border = "1px solid red";
    } else {
      document.getElementById("email").style.border = "";
    }

    if (phone.trim() === "") {
      document.getElementById("phone").style.border = "2px solid red";
    } else {
      document.getElementById("phone").style.border = "";
    }

    if (message.trim() === "") {
      document.getElementById("message").style.border = "2px solid red";
    } else {
      document.getElementById("message").style.border = "";
    }

    if (
      nome.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      message.trim() !== ""
    ) {
      console.log("Formulário enviado!");
    } else {
      console.log("Por favor, preencha todos os campos obrigatórios.");
    }
  });
