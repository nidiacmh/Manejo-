/*
*Catalogo de usuarios
*/

//Variables globales
var usuarios = new Array();//Se declara el array que va a contener a los usuarios
                            //que agregas en la caja de texto
var contadorUsuarios = 0;

//Esta funcion va a ir agregando al arreglo a los usuarios que ingreses
function agregarUsuario(entrada){
  var usuario = entrada.value.trim();//trim quita los espacion de una cadena
  usuarios[contadorUsuarios++] = usuario;
  //Vista del catalogo de Usuarios
  mostrarUsuarios();
  //Se limpia la caja de texto y se selecciona
  entrada.value = "";
  entrada.focus();
}

function mostrarUsuarios(){
  //document.getElementById(listado);
  limpiar("listado");
  var usuario = null;
  for (i = 0; i < usuarios.length; i++) {
    usuario = usuarios[i];
    var resultado = i + "-" + usuario;
   imprimir(resultado, "listado");
  }

  function buscarUsuario(ea){
    for ( i = 0; i <= usuarios.length; i++) {
      if (usuarios[i] == entrada.value) {
        document.getElementById('busqueda').innerHTML = "El usuario tiene la posicion: " + [i];
        break;//Si encuentra al usuario indica la posicion y si no sigue buscando
      }
      else {
        document.getElementById("busqueda").innerHTML = "No de encontro ningun resultado";
      }
    }
  }

  function imprimir(valor, campo){
    var resultado = document.getElementById(campo);
    resultado.innerHTML += valor + "<br/>";
  }

  function limpiar(campo){
    document.getElementById(campo).innerHTML = "";
  }
}
