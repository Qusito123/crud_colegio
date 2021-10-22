import { Request, Response } from 'express';

import db from '../database';

class GradoController {
    public async listar(req: Request, res: Response) {
        await db.query('SELECT g.id_grado, g.nombre_grado, p.nombre_profesor from grado g INNER JOIN profesor p ON g.id_profesor = p.id_profesor', function(err, result, fields) {
            if(err) throw err;
            res.json(result);
        })
    }

    public async listarUno(req: Request, res: Response) {
        const {
            id
        } = req.params;
        
        await db.query('SELECT * from grado where id_grado = ?', [id], function(err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Grado no encontrado'
                });
            }
        });
    }

    public async listarInformacion(req: Request, res: Response) {
        const {
            id
        } = req.params;
        
        await db.query('SELECT g.id_grado, g.nombre_grado, p.nombre_profesor from grado g INNER JOIN profesor p ON g.id_profesor = p.id_profesor where g.id_grado = ?', [id], function(err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Grado no encontrado'
                });
            }
        });
    }

    public async crear(req: Request, res: Response) {
        await db.query('INSERT INTO grado SET ?', [req.body], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Grado creado'
        });
    }

    public async editar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('UPDATE grado SET ? WHERE id_grado = ?', [req.body, id], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Grado actualizado ' + id
        });
    }

    public async eliminar(req: Request, res: Response) {
        const {
            id
        } = req.params;

        await db.query('DELETE FROM grado WHERE id_grado = ?', [id], function(err, result, fields) {
            if(err) throw err;
            res.json({
                message: 'Grado eliminado exitosamente'
            });
        });
    }
}

const gradoController = new GradoController();
export default gradoController;