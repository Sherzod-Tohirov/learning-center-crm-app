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
exports.SubjectModel = void 0;
const typeorm_1 = require("typeorm");
const group_entities_1 = require("./group.entities");
const teacher_entities_1 = require("./teacher.entities");
let SubjectModel = class SubjectModel {
    id;
    subject_name;
    groups;
    teachers;
};
exports.SubjectModel = SubjectModel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SubjectModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubjectModel.prototype, "subject_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_entities_1.GroupModel, (groups) => groups.subjects),
    __metadata("design:type", Array)
], SubjectModel.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => teacher_entities_1.TeacherModel, (teacher_id) => teacher_id.subjects),
    __metadata("design:type", Array)
], SubjectModel.prototype, "teachers", void 0);
exports.SubjectModel = SubjectModel = __decorate([
    (0, typeorm_1.Entity)({
        name: 'subject',
    })
], SubjectModel);
