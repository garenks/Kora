function atualizarScore(valor) {
  document.getElementById("score-valor").textContent = valor;

  const faixaEl = document.getElementById("score-faixa");

  if (valor <= 300) {
    faixaEl.textContent = "Ruim - alto risco de reprovação";
    faixaEl.className = "score-faixa faixa-ruim";
  } else if (valor <= 500) {
    faixaEl.textContent = "Regular - aprovação com juros altos";
    faixaEl.className = "score-faixa faixa-regular";
  } else if (valor <= 700) {
    faixaEl.textContent = "Bom - boas chances de aprovação";
    faixaEl.className = "score-faixa faixa-bom";
  } else {
    faixaEl.textContent = "Ótimo - melhores taxas do mercado";
    faixaEl.className = "score-faixa faixa-otimo";
  }
}
