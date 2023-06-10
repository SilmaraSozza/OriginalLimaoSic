let fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];

function TrocarFoto(foto) {
  document.querySelector(".imagem-banner").src = "imagens/" + fotos[foto];
}

let fotoAtual = 0;
TrocarFoto(fotoAtual);

setInterval(function () {
  fotoAtual++;
  if (fotoAtual >= fotos.length) {
    fotoAtual = 0;
  }
  TrocarFoto(fotoAtual);
}, 3000);

document.querySelector("#btFoto1").addEventListener("click", function () {
    TrocarFoto(0); // Altere para 0 para exibir a primeira imagem
  });
  document.querySelector("#btFoto2").addEventListener("click", function () {
    TrocarFoto(1);
  });
  document.querySelector("#btFoto3").addEventListener("click", function () {
    TrocarFoto(2);
  });
 