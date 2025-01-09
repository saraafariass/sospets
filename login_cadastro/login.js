// Função para alternar a visibilidade da senha
const alternarSenha = document.getElementById("alternar-senha");
const campoSenha = document.getElementById("senha");


alternarSenha.addEventListener("click", function() {
   // Verifica o tipo do campo de senha e alterna entre "password" e "text"
   const tipo = campoSenha.type === "password" ? "text" : "password";
   campoSenha.type = tipo;


   // Altera o ícone conforme a visibilidade da senha
   this.innerHTML = tipo === "password" ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
});


