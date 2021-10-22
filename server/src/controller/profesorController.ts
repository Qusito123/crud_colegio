import { Request, Response } from 'express';

import db from '../database';

class ProfesorController {
    public async listar(req: Request, res: Response) {
        await db.query('SELECT * from profesor', function(err, result, fields) {
            if(err) throw err;
            res.json(result);
        })
    }

    public async listarUno(req: Request, res: Response) {
        const {
            id
        } = req.params;
        
        await db.query('SELECT * from profesor where id_profesor = ?', [id], function(err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Profesor no encontrado'
                });
            }
        });
    }

    public async crear(req: Request, res: Response) {
        await db.query('INSERT INTO profesor SET ?', [req.body], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Profesor creado'
        });
    }

    public async editar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('UPDATE profesor SET ? WHERE id_profesor = ?', [req.body, id], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Proresor actualizado ' + id
        });
    }

    public async eliminar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('DELETE FROM profesor WHERE id_profesor = ?', [id], function(err, result, fields) {
            if(err) throw err;
            res.json({
                message: 'Profesor eliminado exitosamente'
            });
        });
    }
}

const profesorController = new ProfesorController();
export default profesorController;