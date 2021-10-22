import { Request, Response } from 'express';

import db from '../database';

class AlumnoController {
    public async listar(req: Request, res: Response) {
        await db.query('SELECT * from alumno', function(err, result, fields) {
            if(err) throw err;
            res.json(result);
        })
    }

    public async listarUno(req: Request, res: Response) {
        const {
            id
        } = req.params;
        
        await db.query('SELECT * from alumno where id_alumno = ?', [id], function(err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Alumno no encontrado'
                });
            }
        });
    }

    public async crear(req: Request, res: Response) {
        await db.query('INSERT INTO alumno SET ?', [req.body], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'alumno creado'
        });
    }

    public async editar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('UPDATE alumno SET ? WHERE id_alumno = ?', [req.body, id], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Alumno actualizado ' + id
        });
    }

    public async eliminar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('DELETE FROM alumno WHERE id_alumno = ?', [id], function(err, result, fields) {
            if(err) throw err;
            res.json({
                message: 'Alumno eliminado exitosamente'
            });
        });
    }
}

const alumnoController = new AlumnoController();
export default alumnoController;