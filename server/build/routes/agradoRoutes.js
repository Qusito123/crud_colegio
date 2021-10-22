"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agradoController_1 = __importDefault(require("../controller/agradoController"));
class AgradoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', agradoController_1.default.listar);
        this.router.get('/:id', agradoController_1.default.listarAlumnosPorGrado);
        this.router.post('/', agradoController_1.default.crear);
        this.router.put('/:id', agradoController_1.default.editar);
        this.router.delete('/:id', agradoController_1.default.eliminar);
    }
}
const agradoRoutes = new AgradoRoutes();
exports.default = agradoRoutes.router;
