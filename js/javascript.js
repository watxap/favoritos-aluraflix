var eliminar = document.getElementsByClassName("form-wrapper");
for (let i = 0; i < eliminar.length; i++) {
  eliminar[i].parentNode.removeChild(eliminar[i]);
}

//Que además del poster, permita agregar un link al trailer en YouTube(Desafío 1)
//Nota: se rehace el div entero para que quede mejor organizado estéticamente, son retocar el documento .html original

document.write(`<div class="form-wrapper">
<input type="text" id="pelicula" name="pelicula" placeholder="Dirección URL del poster">
<input type="text" id="trailer" name="trailer" placeholder="Link del trailer en YouTube">
<button onClick="agregarPelicula()">Agregar película</button>
</div>`)

//Mientras se ejecuta, almacenar las películas en una variable (Desafío 2) 

var peliculaFavorita
var trailerPelicula
var listadoPeliculas = []

function agregarPelicula(){
//Agregar condiciones a la función (Desafío 3)  
  var peliculaFavorita = document.getElementById('pelicula').value
  var trailerPelicula = document.getElementById('trailer').value
  if (
    (peliculaFavorita.endsWith("jpg") || peliculaFavorita.endsWith("jpeg"))
  ) {
  var elementoListaPeliculas = document.getElementById('listaPeliculas')
  elementoListaPeliculas.innerHTML = elementoListaPeliculas.innerHTML + `<a href=${trailerPelicula} target="_blank"><img src="${peliculaFavorita}"></a>`
  listadoPeliculas.push(trailerPelicula)
  document.getElementById('pelicula').value = ''
  document.getElementById('trailer').value = ''
  } else {
    alert("La URL de la imagen debe finalizar en .jpg o .jpeg");
  }
}



  