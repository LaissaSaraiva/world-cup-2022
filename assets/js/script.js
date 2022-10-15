// Consumir de uma API as 32 seleções da Copa

function getDados() {
  const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";

  let resposta = "";

  fetch(url, {
    method: "GET",
    headers: {
      "git-user": "laissaSaraiva",
    },
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
    });
}

getDados();
