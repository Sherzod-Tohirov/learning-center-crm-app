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
exports.TeacherModel = void 0;
const typeorm_1 = require("typeorm");
const group_entities_1 = require("./group.entities");
const subject_entities_1 = require("./subject.entities");
let TeacherModel = class TeacherModel {
    id;
    first_name;
    last_name;
    age;
    phone_number;
    img;
    subjects;
    groups;
};
exports.TeacherModel = TeacherModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TeacherModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherModel.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherModel.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TeacherModel.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TeacherModel.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TeacherModel.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subject_entities_1.SubjectModel, (subject_id) => subject_id.teachers),
    __metadata("design:type", subject_entities_1.SubjectModel)
], TeacherModel.prototype, "subjects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_entities_1.GroupModel, (group_id) => group_id.teachers),
    __metadata("design:type", Array)
], TeacherModel.prototype, "groups", void 0);
exports.TeacherModel = TeacherModel = __decorate([
    (0, typeorm_1.Entity)({
        name: 'teacher',
    })
], TeacherModel);
