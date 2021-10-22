"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class AlumnoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * from alumno', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * from alumno where id_alumno = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({
                        message: 'Alumno no encontrado'
                    });
                }
            });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO alumno SET ?', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'alumno creado'
            });
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE alumno SET ? WHERE id_alumno = ?', [req.body, id], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Alumno actualizado ' + id
            });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM alumno WHERE id_alumno = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({
                    message: 'Alumno eliminado exitosamente'
                });
            });
        });
    }
}
const alumnoController = new AlumnoController();
exports.default = alumnoController;
