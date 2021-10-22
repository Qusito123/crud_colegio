import { Router } from 'express';
import gradoController from '../controller/gradoController';

class GradoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gradoController.listar);
        this.router.get('/:id', gradoController.listarUno);
        this.router.get('/informacion/:id', gradoController.listarInformacion);
        this.router.post('/', gradoController.crear);
        this.router.put('/:id', gradoController.editar);
        this.router.delete('/:id', gradoController.eliminar);
    }
}

const gradoRoutes = new GradoRoutes();
export default gradoRoutes.router;