"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacher_1 = require("../controller/teacher");
const multer_1 = __importDefault(require("../lib/multer"));
const router = (0, express_1.Router)();
router.get('/all-teacher', teacher_1.TeacherGet);
router.get('/all-teacher/:id', teacher_1.TeacherGetOne);
router.post('/teacher/create', multer_1.default.single('img'), teacher_1.TeacherCreate);
router.put('/teacher/update/:id', multer_1.default?.single('img'), teacher_1.TeacherUpdate);
router.delete('/teacher/delete/:id', teacher_1.TeacherDelete);
// Img
router.get('/img/:file', teacher_1.ImgGet);
exports.default = router;
