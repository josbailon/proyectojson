// Obtenemos la referencia al elemento de la tabla donde se mostrarán los documentos
const tablaDocumentos = document.getElementById('documentos');

// Función para agregar un nuevo documento a la tabla
function agregarDocumento(nombre, descripcion, fechaSubida) {
    // Creamos una nueva fila de la tabla
    const nuevaFila = document.createElement('tr');

    // Creamos las celdas de la fila
    const nombreDocumento = document.createElement('td');
    const descripcionDocumento = document.createElement('td');
    const fechaSubidaDocumento = document.createElement('td');
    const accionesDocumento = document.createElement('td');

    // Agregamos el contenido a las celdas
    nombreDocumento.textContent = nombre;
    descripcionDocumento.textContent = descripcion;
    fechaSubidaDocumento.textContent = fechaSubida;

    // Creamos los enlaces para las acciones de descargar y eliminar
    const enlaceDescargar = document.createElement('a');
    const enlaceEliminar = document.createElement('a');
    enlaceDescargar.textContent = 'Descargar';
    enlaceEliminar.textContent = 'Eliminar';
    enlaceDescargar.classList.add('accion-descargar');
    enlaceEliminar.classList.add('accion-eliminar');
    accionesDocumento.appendChild(enlaceDescargar);
    accionesDocumento.appendChild(document.createTextNode(' | '));
    accionesDocumento.appendChild(enlaceEliminar);

    // Agregamos las celdas a la fila
    nuevaFila.appendChild(nombreDocumento);
    nuevaFila.appendChild(descripcionDocumento);
    nuevaFila.appendChild(fechaSubidaDocumento);
    nuevaFila.appendChild(accionesDocumento);

    // Agregamos la fila a la tabla
    tablaDocumentos.appendChild(nuevaFila);
}

// Función para manejar el evento de envío del formulario de subir documento
function manejarFormularioSubirDocumento(evento) {
    evento.preventDefault();

    // Obtenemos los valores del formulario
    const nombreDocumento = document.getElementById('documento').value;
    const descripcionDocumento = document.getElementById('descripcion').value;
    const fechaSubidaDocumento = new Date().toLocaleString();

    // Agregamos el documento a la tabla
    agregarDocumento(nombreDocumento, descripcionDocumento, fechaSubidaDocumento);

    // Limpiamos los campos del formulario
    document.getElementById('documento').value = '';
    document.getElementById('descripcion').value = '';
}

// Manejamos el evento de envío del formulario de subir documento
document.getElementById('subir-documento-form').addEventListener('submit', manejarFormularioSubirDocumento);

// Función para manejar el evento de hacer clic en el enlace de eliminar
function manejarAccionEliminar(evento) {
    evento.preventDefault();

    // Obtenemos la fila de la tabla que contiene el enlace de eliminar
    const filaDocumento = evento.target.parentNode.parentNode;

    // Eliminamos la fila de la tabla
    tablaDocumentos.removeChild(filaDocumento);
}

// Función para manejar el evento de hacer clic en el enlace de descargar
function manejarAccionDescargar(evento) {
    evento.preventDefault();

    // Aquí iría el código para descargar el documento
}
// Seleccionar el botón de actualizar por su ID
const btnActualizar = document.getElementById('btn-actualizar');

// Agregar evento 'click' al botón de actualizar
btnActualizar.addEventListener('click', function () {
    location.reload(); // Recargar la página
});


// Manejamos el evento de hacer clic en los enlaces de eliminar
tablaDocumentos.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('accion-eliminar')) {
        manejarAccionEliminar(evento);
    }
    else if (evento.target.classList.contains('accion-descargar')) {
        manejarAccionDescargar(evento);
    }
});

