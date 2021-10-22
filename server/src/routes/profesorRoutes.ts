import { Router } from 'express';
import profesorController from '../controller/profesorController';

class ProfesorRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', profesorController.listar);
        this.router.get('/:id', profesorController.listarUno);
        this.router.post('/', profesorController.crear);
        this.router.put('/:id', profesorController.editar);
        this.router.delete('/:id', profesorController.eliminar);
    }
}

const profesorRoutes = new ProfesorRoutes();
export default profesorRoutes.router;