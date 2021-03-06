
const socketController = (socket) => {

    socket.on('disconnect', () => {

        // console.log('Cliente desconectado', socket.id );
    })

    socket.on('send-message', (payload, callback) => {

        const id = 123456;

        // Si queremos retornar en el mismo evento, informacion para el cliente que llamo.
        callback({ id, datetime: new Date().getTime() });

        //this.io.emit('emit-message', payload);
        socket.broadcast.emit('emit-message', payload);
    });

};

module.exports = {
    socketController
};