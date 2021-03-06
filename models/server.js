const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;

        // Socket.io
        this.server = require('http').Server(this.app);
        this.io     = require('socket.io')(this.server);

        // Middlewares
        this.middlewares();

        // Routes
        this.routes()

        // Sockets
        this.sockets();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        //Public directory
        this.app.use( express.static('public'));

    }

    routes() {

        // this.app.use( this.authRoute , require('../routes/auth.route'));    

    };

    sockets(){

        this.io.on('connection', socketController);

    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    };
}

module.exports = Server;