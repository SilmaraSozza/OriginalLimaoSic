let fotos  = ["foto1.jpg","foto2.jpg","foto3.jpg"];
let legendas = ["whatsapp","contato1","contato2"];

function TrocarFoto(foto) {
    document.querySelector(".imagem-banner").src ="imagens/"+ fotos[foto];
   
    }

    let fotoAtual = 1;
    TrocarFoto(fotoAtual);

    setInterval(function(){
        fotoAtual++;
        if( fotoAtual > 3) {
            fotoAtual = 1;
        }
        TrocarFoto(fotoAtual);
    }, 3000);

    document.querySelector("#btFoto1").addEventListener("click",function(){
        TrocarFoto(1);
    })
    document.querySelector("#btFoto2").addEventListener("click",function(){
        TrocarFoto(2);
    })
    document.querySelector("#btFoto3").addEventListener("click",function(){
        TrocarFoto(3);
    })