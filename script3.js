// Obtener el elemento del formulario y agregar un evento de envío
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    // Obtener el valor seleccionado del documento
    const documentoSelect = document.getElementById('documento');
    const documentoValue = documentoSelect.value;
    
    // Realizar acciones basadas en el documento seleccionado
    switch (documentoValue) {
        case 'documento1':
            console.log('Documento seleccionado: certificados');
            break;
        case 'documento2':
            console.log('Documento seleccionado: informes');
            break;
        case 'documento3':
            console.log('Documento seleccionado: eventos');
            break;
        default:
            console.log('Documento seleccionado: desconocido');
            break;
    }
}
