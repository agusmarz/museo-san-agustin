
const btnCierra = document.querySelector('#btn-cierra');

const btnAdelanta = document.querySelector('#btn-adelanta');

const btnRetrocede = document.querySelector('#btn-retrocede');

const imagenes = document.querySelectorAll('#gl img');
console.log(imagenes);

const lightbox = document.querySelector('#contenedor-principal');

const imagenActiva = document.querySelector('#img-activa');

let indiceImagen = 0;   

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
    console.log(indiceImagen);
}

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox)
});

btnCierra.addEventListener('click', () =>{
    lightbox.style.display = 'none';
    console.log(indiceImagen);
});

const adelantaImagen = () => {

    if(indiceImagen === imagenes.length-1){
        indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen+1].src;
    indiceImagen++;
    console.log(indiceImagen);
};

btnAdelanta.addEventListener('click', adelantaImagen);


const retrocedeImagen = () => {

    if(indiceImagen === 0){
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen-1].src;
    indiceImagen = indiceImagen - 1;
    console.log(indiceImagen);
};

btnRetrocede.addEventListener('click', retrocedeImagen);

function iniciarMapa(){
    var coord = {lat:-31.683804492372904, lng: -60.94211144337146 };
    var map = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 20,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}