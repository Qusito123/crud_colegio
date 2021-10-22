"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const alumnoRoutes_1 = __importDefault(require("./routes/alumnoRoutes"));
const profesorRoutes_1 = __importDefault(require("./routes/profesorRoutes"));
const gradoRoutes_1 = __importDefault(require("./routes/gradoRoutes"));
const agradoRoutes_1 = __importDefault(require("./routes/agradoRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000); // Puerto donde estara el servidor
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/alumno', alumnoRoutes_1.default);
        this.app.use('/profesor', profesorRoutes_1.default);
        this.app.use('/grado', gradoRoutes_1.default);
        this.app.use('/agrado', agradoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is listening on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
