"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
const week_entities_1 = require("../entities/week.entities");
const subject_entities_1 = require("../entities/subject.entities");
const teacher_entities_1 = require("../entities/teacher.entities");
const group_entities_1 = require("../entities/group.entities");
const student_entities_1 = require("../entities/student.entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [week_entities_1.WeekModel, subject_entities_1.SubjectModel, teacher_entities_1.TeacherModel, group_entities_1.GroupModel, student_entities_1.StudentModel],
});
