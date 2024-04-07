"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModel = void 0;
const typeorm_1 = require("typeorm");
const student_entities_1 = require("./student.entities");
const subject_entities_1 = require("./subject.entities");
const teacher_entities_1 = require("./teacher.entities");
const week_entities_1 = require("./week.entities");
let GroupModel = class GroupModel {
    id;
    group_name;
    group_time_start;
    group_time_stop;
    weeks;
    subjects;
    teachers;
    students;
};
exports.GroupModel = GroupModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GroupModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GroupModel.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GroupModel.prototype, "group_time_start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GroupModel.prototype, "group_time_stop", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => week_entities_1.WeekModel, (week_id) => week_id.groups),
    __metadata("design:type", week_entities_1.WeekModel)
], GroupModel.prototype, "weeks", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subject_entities_1.SubjectModel, (subject_id) => subject_id.groups),
    __metadata("design:type", subject_entities_1.SubjectModel)
], GroupModel.prototype, "subjects", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => teacher_entities_1.TeacherModel, (teacher_id) => teacher_id.groups),
    __metadata("design:type", teacher_entities_1.TeacherModel)
], GroupModel.prototype, "teachers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entities_1.StudentModel, (student_id) => student_id.groups),
    __metadata("design:type", Array)
], GroupModel.prototype, "students", void 0);
exports.GroupModel = GroupModel = __decorate([
    (0, typeorm_1.Entity)({
        name: 'group',
    })
], GroupModel);
