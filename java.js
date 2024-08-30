function calcular() {
  let presenca = document.getElementById("presenca").value;
  let nota = document.getElementById("nota").value;

  if (nota === "" || presenca === "") {
    alert("Você precisa preencher todos os campos!");
    return;
  }

  if (nota >= 7 && presenca >= 75) {
    alert("APROVADO! Aproveite suas férias.");
  } else if (nota < 7 && presenca >= 75) {
    alert("REPROVADO POR NOTA! Sua nota final foi menor que 7.");
  } else if (nota >= 7 && presenca < 75) {
    alert("REPROVADO POR FALTA! Seu percentual de presença foi menor que 75%.");
  } else {
    alert("REPROVADO! Por nota e falta.");
  }
  document.getElementById("presenca").value = "";
  document.getElementById("nota").value = "";
}
