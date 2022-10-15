// Consumir de uma API as 32 seleções da Copa

function getDados() {
  const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";

  let resultado = "";
  let selecao = "";
  let html = document.querySelector("#conteudo");

  fetch(url, {
    method: "GET",
    headers: {
      "git-user": "laissaSaraiva",
    },
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      let index = 0;
      resultado = resposta.Result;
      selecao = resultado[index].Name
      console.log(resultado);
      console.log(selecao);
      html.innerHTML = selecao;
    });
}

getDados();
