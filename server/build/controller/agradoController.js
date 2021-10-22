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
class AgradoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * from alumnogrado', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listarAlumnosPorGrado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT ag.id_agrado, a.nombre_alumno, a.apellidos_alumno, a.genero_alumno from alumnogrado ag INNER JOIN alumno a ON ag.id_alumno = a.id_alumno where ag.id_grado = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO alumnogrado SET ?', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Alumno agregado al grado'
            });
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE alumnogrado SET ? WHERE id_agrado = ?', [req.body, id], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Alumno y Grado actualizado ' + id
            });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM alumnogrado WHERE id_agrado = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({
                    message: 'Alumno eliminado del grado'
                });
            });
        });
    }
}
const agradoController = new AgradoController();
exports.default = agradoController;
