
function mostrarDatos(datos) {
    const nombre = datos.nombre;
    const direccion = datos.direccion;
    const telefono = datos.telefono;
    const email = datos.email;

    const datosContainer = document.createElement("div");
    datosContainer.id = "datos-container";

    const datosHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Dirección: ${direccion}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Email: ${email}</p>
    `;

    datosContainer.innerHTML = datosHTML;
    document.body.appendChild(datosContainer);
}
