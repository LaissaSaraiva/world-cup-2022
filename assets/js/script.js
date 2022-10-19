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
      console.log(resultado); //Array
      
      resultado.forEach(function (element, index) {
        let selecao = element.Name;
        console.log(index, selecao);
        index++;

        //Removendo o objeto Token
        for (let i = 0; i < resultado.length; i++) {
          let aSerRemovido = resultado[i];
          delete aSerRemovido.Token;
        }
      });

      //Função para Divisão de Array
      let novoArray = [];
      function dividirGrupos(array, equipesPorGrupo) {
        let i = 0;
        while (i < array.length) {
          novoArray.push(array.slice(i, i + equipesPorGrupo));
          i = i + equipesPorGrupo;
        }
        return novoArray;
      }

      const divisaoInicial = dividirGrupos(resultado, 4); // Array dos 8 times iniciais
      console.log(divisaoInicial);

      // Inclusão de propriedades ao ARRAY ( Nome do grupos/ pontuações e etc)
      divisaoInicial.forEach(function (item, indice) {
        item.unshift(`Grupo: ${indice}`); // Inserindo Nome do grupo na primeira posição de cada Array
      });

      console.log(divisaoInicial);

      // Loop para inclusão do texto no HTML
      for (let i = 0; i < resultado.length; i++) {
        let conteudo = document.createElement("p"); // Criando Paragrafo
        conteudo.classList.add("selecao"); // Adicionando estilo ao parágrafo
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
