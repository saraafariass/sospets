
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

function preVisualizarImagem(evento) {
    const visualizacaoFoto = document.getElementById('photo-preview');
    const arquivo = evento.target.files[0];   /// sem funcionar 

    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function (e) {
            visualizacaoFoto.innerHTML = `<img src="${e.tasrget.result}" alt="Foto do pet">`;
        };
        leitor.readAsDataURL(arquivo);
    } else {
        visualizacaoFoto.innerHTML = `<span>+</span>`;
    }

}



// Exibir imagem de pré-visualização ao selecionar um arquivo
document.getElementById('foto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview-imagem').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});



document.getElementById('formPet').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    alert('Pet cadastrado com sucesso!');
});
 






