import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import alumnoRoutes from './routes/alumnoRoutes';
import profesorRoutes from './routes/profesorRoutes';
import gradoRoutes from './routes/gradoRoutes';
import agradoRoutes from './routes/agradoRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();

        this.config();
        this.routes();
    }

    config(): void {
        this.app.set("port", process.env.PORT || 3000); // Puerto donde estara el servidor
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/alumno', alumnoRoutes);
        this.app.use('/profesor', profesorRoutes);
        this.app.use('/grado', gradoRoutes);
        this.app.use('/agrado', agradoRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is listening on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
