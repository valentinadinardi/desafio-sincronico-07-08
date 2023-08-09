// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData
fetch(DATA_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showData(data.students);
  })
  .catch((error) => {
    console.error("Ocurrió un error: ", error);
  });

  // Explicación de la función fetch():
  
//   Imagina que estás pidiendo un paquete (datos) a una tienda en línea (servidor) a través de un mensajero (función fetch()). El mensajero va a la tienda y trae de vuelta el paquete.

// Pedir el paquete (solicitud):

// Usas la función fetch() para decirle al mensajero que vaya a la tienda (URL) y traiga algo.
// La tienda recibe la solicitud y se prepara para enviarte el paquete.
// Recibir el paquete (respuesta):

// El mensajero vuelve de la tienda con un paquete (respuesta del servidor).
// Esta respuesta tiene cosas como la información de la tienda (encabezados) y el estado de la entrega (éxito o fallo).
// Abrir el paquete (convertir a JSON):

// Quieres ver el contenido real del paquete, pero está en un formato especial (encapsulado). Entonces, abres el paquete y ves su contenido (datos) en formato JSON.
// Convertir la respuesta en JSON es como abrir el paquete y sacar los artículos que hay adentro.
// Mirar lo que hay dentro (usar los datos):

// Una vez que tienes los artículos del paquete (datos en formato JSON), ves que hay cosas como nombres y apellidos de estudiantes en el paquete.
// Usas estos datos para decirle a la gente quiénes son los estudiantes y cómo se llaman.
// Manejar problemas (errores):

// A veces, el mensajero puede tropezar o el paquete puede estar dañado. Si eso sucede, le dices al mensajero que te lo diga (capturar el error) para que puedas entender lo que salió mal.
// En tu código, la función fetch() es el mensajero que va a buscar los datos a la tienda (servidor), convierte esos datos en JSON para que puedas usarlos, los pasas a la función showData() para mostrar los nombres y apellidos de los estudiantes en una página web y, si algo sale mal, lo atrapas para entender qué pasó.




