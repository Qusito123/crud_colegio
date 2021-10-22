"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesorController_1 = __importDefault(require("../controller/profesorController"));
class ProfesorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', profesorController_1.default.listar);
        this.router.get('/:id', profesorController_1.default.listarUno);
        this.router.post('/', profesorController_1.default.crear);
        this.router.put('/:id', profesorController_1.default.editar);
        this.router.delete('/:id', profesorController_1.default.eliminar);
    }
}
const profesorRoutes = new ProfesorRoutes();
exports.default = profesorRoutes.router;
