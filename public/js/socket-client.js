
// Elements on html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

// Adding eventListeners
btnEnviar.addEventListener( 'click', () => {
    const message = txtMensaje.value;

    const payload = {
        id: '123ABC',
        message,
        date: new Date().getTime(),
    };

    socket.emit('send-message', payload, (id) => {
        console.log('Informacion que llego desde el server', id);
    })
})


const socket = io();

socket.on('connect', () => {

    lblOffline.style.display= 'none';
    lblOnline.style.display= '';
})

socket.on('disconnect', () => {

    lblOnline.style.display= 'none';
    lblOffline.style.display= '';
})

socket.on('emit-message', (payload) => {
    console.log(payload);
})