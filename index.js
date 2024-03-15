import express from 'express';
import { Server } from 'socket.io';
const PORT = 8080;
const ip ='192.168.1.5'; //!cambia esto por la IP de tu pc

const app = express();
const httpServer = app.listen(PORT, ip,  () => {
    console.table(
        {
            'Display:': `http://${ip}:${PORT}/display`,//!Este enlace que sale en la consola en una tabla, lo pegas en el navegador ya sea del celu o del pc y abre
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

app.use('/display', express.static('public'));
app.use(express.json());

/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {
    console.log(socket.id);
    socket.on("instructions-controller", message =>{
        console.log(message);
        socket.broadcast.emit("instructions-display", message);
    });
    socket.on("directions-controller", directionController => {
        console.log(directionController);
        socket.broadcast.emit("directions-display", directionController);
    });
});