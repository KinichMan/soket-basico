const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado.');
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicación'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado.');
    });

    //ESCUCHAR INFORMACION.
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        /*
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!'
            });
        }
        */
        //BROAD CAST
        client.broadcast.emit('enviarMensaje', data);
    });

});