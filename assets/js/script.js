// Consumir de uma API as 32 seleções da Copa

function getDados() {
  const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";

  let resultado = "";
  let html = document.querySelector(".html");
  let conteudo = document.createElement("p");

  fetch(url, {
    method: "GET",
    headers: {
      "git-user": "laissaSaraiva",
    },
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      resultado = resposta.Result; //O Array a ser manipulado
      // selecao = resultado[index].Name
      console.log(resultado); //Array

      resultado.forEach(function (element, index) {
        let selecao = element.Name;
        console.log(index, selecao);
        index++;
      });

      // Loop para inclusão do texto no HTML
      for (let i = 0; i < resultado.length; i++) {
        let conteudo = document.createElement("p"); // Criando Paragrafo
        conteudo.classList.add('selecao'); // Adicionando estilo ao parágrafo
        conteudo.innerHTML = `${i} - ${resultado[i].Name}`; // incluíndo conteúdo no html
        html.appendChild(conteudo); // adicionando tag <p> a uma <div>
      }
    });
}

getDados();

// function sortearNumero() {
//   let numeroAleatorio = Math.random();
//   let aleatorioInteiro = parseInt(numeroAleatorio * (32 + 0));
// console.log(numeroAleatorio);
// console.log(aleatorioInteiro);
// }
// sortearNumero()
