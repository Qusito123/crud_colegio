import { Request, Response } from 'express';

import db from '../database';

class AgradoController {
    public async listar(req: Request, res: Response) {
        await db.query('SELECT * from alumnogrado', function(err, result, fields) {
            if(err) throw err;
            res.json(result);
        })
    }

    public async listarAlumnosPorGrado(req: Request, res: Response) {
        const {
            id
        } = req.params;
        
        await db.query('SELECT ag.id_agrado, a.nombre_alumno, a.apellidos_alumno, a.genero_alumno from alumnogrado ag INNER JOIN alumno a ON ag.id_alumno = a.id_alumno where ag.id_grado = ?', [id], function(err, result, fields) {
            if(err) throw err;
            res.json(result);
        });
    }

    public async crear(req: Request, res: Response) {
        await db.query('INSERT INTO alumnogrado SET ?', [req.body], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Alumno agregado al grado'
        });
    }

    public async editar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('UPDATE alumnogrado SET ? WHERE id_agrado = ?', [req.body, id], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Alumno y Grado actualizado ' + id
        });
    }

    public async eliminar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('DELETE FROM alumnogrado WHERE id_agrado = ?', [id], function(err, result, fields) {
            if(err) throw err;
            res.json({
                message: 'Alumno eliminado del grado'
            });
        });
    }
}

const agradoController = new AgradoController();
export default agradoController;