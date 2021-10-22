"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnoController_1 = __importDefault(require("../controller/alumnoController"));
class AlumnoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', alumnoController_1.default.listar);
        this.router.get('/:id', alumnoController_1.default.listarUno);
        this.router.post('/', alumnoController_1.default.crear);
        this.router.put('/:id', alumnoController_1.default.editar);
        this.router.delete('/:id', alumnoController_1.default.eliminar);
    }
}
const alumnoRoutes = new AlumnoRoutes();
exports.default = alumnoRoutes.router;
