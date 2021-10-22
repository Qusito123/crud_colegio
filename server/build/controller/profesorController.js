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
class ProfesorController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * from profesor', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    listarUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * from profesor where id_profesor = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                }
                else {
                    res.status(404).json({
                        message: 'Profesor no encontrado'
                    });
                }
            });
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO profesor SET ?', [req.body], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Profesor creado'
            });
        });
    }
    editar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE profesor SET ? WHERE id_profesor = ?', [req.body, id], function (err, result, fields) {
                if (err)
                    throw err;
            });
            res.json({
                message: 'Proresor actualizado ' + id
            });
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM profesor WHERE id_profesor = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({
                    message: 'Profesor eliminado exitosamente'
                });
            });
        });
    }
}
const profesorController = new ProfesorController();
exports.default = profesorController;
