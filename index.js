function calcular() {
  const valor = parseFloat(document.getElementById("valor").value || 0);
  const renda = parseFloat(document.getElementById("renda").value || 0);
  const reserva = parseFloat(document.getElementById("reserva").value || 0);
  const prazo = parseInt(document.getElementById("prazo").value || 48);
  const finalidade = document.getElementById("finalidade").value;
  const credito = document.getElementById("credito").value;
  const urgencia = document.getElementById("urgencia").value;
}
