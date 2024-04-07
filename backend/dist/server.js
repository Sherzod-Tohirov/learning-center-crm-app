"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./config/index");
const group_routes_1 = __importDefault(require("./router/group.routes"));
const student_routes_1 = __importDefault(require("./router/student.routes"));
const subject_routes_1 = __importDefault(require("./router/subject.routes"));
const teacher_routes_1 = __importDefault(require("./router/teacher.routes"));
const week_routes_1 = __importDefault(require("./router/week.routes"));
const cors_1 = __importDefault(require("cors"));
function main() {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        index_1.AppDataSource.initialize()
            .then(() => console.log('Connectd'))
            .catch((error) => console.log(error.message));
        app.use((0, cors_1.default)());
        app.use(week_routes_1.default);
        app.use(group_routes_1.default);
        app.use(student_routes_1.default);
        app.use(subject_routes_1.default);
        app.use(teacher_routes_1.default);
        app.listen(9090, () => {
            console.log(9090);
        });
    }
    catch (error) {
        console.log(error);
    }
}
main();
