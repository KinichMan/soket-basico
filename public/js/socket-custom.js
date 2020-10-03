var socket = io();
//ESCUCHAR INFORMACION
socket.on('connect', function() {
    console.log("Conectado al servidor");
});
//ESCUCHAR INFORMACION
socket.on('disconnect', function() {
    console.log("Perdimos conexión con el servidor");
});

//ENVIAR INFORMACION
socket.emit('enviarMensaje', {
    usuario: 'Uriel Mensaje',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del servidor ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log("Servidor");
    console.log(mensaje);
});