import { Router } from 'express';
import agradoController from '../controller/agradoController';

class AgradoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', agradoController.listar);
        this.router.get('/:id', agradoController.listarAlumnosPorGrado);
        this.router.post('/', agradoController.crear);
        this.router.put('/:id', agradoController.editar);
        this.router.delete('/:id', agradoController.eliminar);
    }
}

const agradoRoutes = new AgradoRoutes();
export default agradoRoutes.router;