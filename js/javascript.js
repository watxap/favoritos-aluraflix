var eliminar = document.getElementsByClassName("form-wrapper");
for (let i = 0; i < eliminar.length; i++) {
  eliminar[i].parentNode.removeChild(eliminar[i]);
}

document.write(`<div class="form-wrapper">
<input type="text" id="pelicula" name="pelicula" placeholder="Dirección URL del poster">
<input type="text" id="trailer" name="trailer" placeholder="Link del trailer en YouTube">
<button onClick="agregarPelicula()">Agregar película</button>
</div>`)

//se rehace el div entero para que quede mejor organizado estéticamente, sin retocar el documento .html 

function agregarPelicula(){
      var peliculaFavorita = document.getElementById('pelicula').value
      var trailerPelicula = document.getElementById('trailer').value
      var elementoListaPeliculas = document.getElementById('listaPeliculas')
      elementoListaPeliculas.innerHTML = elementoListaPeliculas.innerHTML + `<a href=${trailerPelicula} target="_blank"><img src="${peliculaFavorita}"></a>`
      document.getElementById('pelicula').value = ''
      document.getElementById('trailer').value = ''
      }