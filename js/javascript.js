var eliminar = document.getElementsByClassName("form-wrapper");
for (let i = 0; i < eliminar.length; i++) {
  eliminar[i].parentNode.removeChild(eliminar[i]);
}
 

document.write(`<div class="form-wrapper">
<input type="text" id="pelicula" name="pelicula" placeholder="Dirección URL del poster">
<input type="text" id="trailer" name="trailer" placeholder="Link del trailer en YouTube">
<button onClick="agregarTrailer()">Agregar trailer</button>
</div>`)

//rehago el div entero para que quede mejor organizado estéticamente, sin retocar el documento .html 



/*

document.write(`<div class="form-wrapper">
<input type="text" id="trailer" name="trailer" placeholder="Link del trailer en YouTube">
<button onClick="agregarTrailer()">Agregar trailer</button>
</div>`)

*/

/*function agregarPelicula(){
    var peliculaFavorita = document.getElementById('pelicula').value
    var elementoListaPeliculas = document.getElementById('listaPeliculas')
    elementoListaPeliculas.innerHTML = elementoListaPeliculas.innerHTML + '<img src=' + peliculaFavorita + '>'
    document.getElementById('pelicula').value = ''
    }

function agregarTrailer(){
      var peliculaFavorita = document.getElementById('pelicula').value
      var elementoListaPeliculas = document.getElementById('listaPeliculas')
      elementoListaPeliculas.innerHTML = elementoListaPeliculas.innerHTML + '<img src=' + peliculaFavorita + '>'
      document.getElementById('pelicula').value = ''
      }
  */