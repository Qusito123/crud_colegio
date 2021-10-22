"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gradoController_1 = __importDefault(require("../controller/gradoController"));
class GradoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gradoController_1.default.listar);
        this.router.get('/:id', gradoController_1.default.listarUno);
        this.router.get('/informacion/:id', gradoController_1.default.listarInformacion);
        this.router.post('/', gradoController_1.default.crear);
        this.router.put('/:id', gradoController_1.default.editar);
        this.router.delete('/:id', gradoController_1.default.eliminar);
    }
}
const gradoRoutes = new GradoRoutes();
exports.default = gradoRoutes.router;
