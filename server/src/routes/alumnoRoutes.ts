import { Router } from 'express';
import alumnoController from '../controller/alumnoController';

class AlumnoRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', alumnoController.listar);
        this.router.get('/:id', alumnoController.listarUno);
        this.router.post('/', alumnoController.crear);
        this.router.put('/:id', alumnoController.editar);
        this.router.delete('/:id', alumnoController.eliminar);
    }
}

const alumnoRoutes = new AlumnoRoutes();
export default alumnoRoutes.router;