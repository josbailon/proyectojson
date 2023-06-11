// Cargar los eventos desde el archivo JSON al iniciar la página
window.addEventListener('DOMContentLoaded', () => {
    fetch('eventos.json')
      .then(response => response.json())
      .then(data => {
        const eventos = data.eventos;
        mostrarEventos(eventos);
      })
      .catch(error => console.log(error));
  });
  
  // Mostrar los eventos en la página
  function mostrarEventos(eventos) {
    const eventosLista = document.getElementById('eventos-lista');
  
    if (eventos.length === 0) {
      eventosLista.innerHTML = '<p>No hay eventos disponibles.</p>';
      return;
    }
  
    eventosLista.innerHTML = '';
    eventos.forEach(evento => {
      const eventoHTML = crearEventoHTML(evento);
      eventosLista.appendChild(eventoHTML);
    });
  }
  
  // Crear el HTML para un evento
  function crearEventoHTML(evento) {
    const eventoDiv = document.createElement('div');
    eventoDiv.classList.add('evento');
  
    const nombreStrong = document.createElement('strong');
    nombreStrong.textContent = evento.nombre;
  
    const fechaP = document.createElement('p');
    fechaP.classList.add('fecha');
    fechaP.textContent = `Fecha: ${evento.fecha}`;
  
    const lugarP = document.createElement('p');
    lugarP.classList.add('lugar');
    lugarP.textContent = `Lugar: ${evento.lugar}`;
  
    const descripcionP = document.createElement('p');
    descripcionP.classList.add('descripcion');
    descripcionP.textContent = evento.descripcion;
  
    eventoDiv.appendChild(nombreStrong);
    eventoDiv.appendChild(fechaP);
    eventoDiv.appendChild(lugarP);
    eventoDiv.appendChild(descripcionP);
  
    return eventoDiv;
  }
  
  // Mostrar/ocultar el modal de agregar evento
  const modal = document.getElementById('agregar-evento-modal');
  const agregarEventoBtn = document.getElementById('agregar-evento');
  const cerrarModalBtn = document.getElementsByClassName('close')[0];
  
  agregarEventoBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  cerrarModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Agregar evento desde el formulario
  const eventoForm = document.getElementById('evento-form');
  
  eventoForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nombreInput = document.getElementById('nombre');
    const fechaInput = document.getElementById('fecha');
    const lugarInput = document.getElementById('lugar');
    const descripcionInput = document.getElementById('descripcion');
  
    const nuevoEvento = {
      nombre: nombreInput.value,
      fecha: fechaInput.value,
      lugar: lugarInput.value,
      descripcion: descripcionInput.value
    };
  
    // Agregar el nuevo evento a la lista
    const eventosLista = document.getElementById('eventos-lista');
    const eventoHTML = crearEventoHTML(nuevoEvento);
    eventosLista.appendChild(eventoHTML);
  
    // Limpiar el formulario
    nombreInput.value = '';
    fechaInput.value = '';
    lugarInput.value = '';
    descripcionInput.value = '';
  
    // Cerrar el modal
    modal.style.display = 'none';
  });
  