var imagenes = ['x','https://mott.pe/noticias/wp-content/uploads/2019/12/C%C3%B3mo-es-el-uso-de-l%C3%ADneas-horizontales-en-la-composici%C3%B3n-de-fotograf%C3%ADa-1280x720.png','https://escueladeposgrado.edu.pe/wp-content/uploads/2021/12/Ingenieri%CC%81adesistemasenmexico.jpg','ima3.jpeg','ima4.jpeg'],
cont = 0;

function carrousel(contenedor){
  contenedor.addEventListener('click', e => {
    let atras = contenedor.querySelector('.atras'),
    adelante = contenedor.querySelector('.adelante'),
    img = contenedor.querySelector('img'),
    tgt = e.target;

    if(tgt == atras){
      if(cont > 0){
        img.src = imagenes[cont-1];
        cont--;
      }else{
        img.src - imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }

    }else if(tgt == adelante){
      if(cont < imagenes.length - 1){
        img.src = imagenes[cont + 1];
        cont++;
      }else{
        img.src - imagenes[0];
        cont = 0;
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector('.contenedor');
  carrousel(contenedor);
});