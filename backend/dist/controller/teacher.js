"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgGet = exports.TeacherUpdate = exports.TeacherDelete = exports.TeacherCreate = exports.TeacherGetOne = exports.TeacherGet = void 0;
const config_1 = require("../config");
const teacher_entities_1 = require("../entities/teacher.entities");
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const TeacherGet = async (req, res) => {
    try {
        const name = req?.query?.name;
        if (!name) {
            const data = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel).find({
                relations: {
                    subjects: true,
                    groups: true,
                },
            });
            return res.send({
                status: 200,
                message: 'Success',
                data,
            });
        }
        const data = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel).find({
            where: {
                first_name: (0, typeorm_1.ILike)(`%${name}%`),
            },
            relations: {
                subjects: true,
                groups: true,
            },
        });
        console.log(data);
        return res.send({
            status: 200,
            message: 'Success',
            data,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.TeacherGet = TeacherGet;
const ImgGet = async (req, res) => {
    try {
        const { file } = req.params;
        res.sendFile(path_1.default.join(process.cwd(), 'uploads', file));
    }
    catch (error) {
        console.log(error);
    }
};
exports.ImgGet = ImgGet;
const TeacherGetOne = async (req, res) => {
    try {
        const { id } = req?.params;
        const data = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel).find({
            relations: {
                subjects: true,
                groups: true,
            },
        });
        const newData = data?.filter((e) => e.id == id);
        if (!newData.length) {
            return res.status(400).json({
                status: 400,
                message: 'Not fund',
            });
        }
        return res.send({
            status: 200,
            message: 'Success',
            data: newData,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.TeacherGetOne = TeacherGetOne;
const TeacherCreate = async (req, res) => {
    try {
        const { first_name, last_name, age, phone_number, subject_id: id, } = req.body;
        let { filename } = req?.file;
        const subject_id = id;
        const { raw } = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel)
            .createQueryBuilder()
            .insert()
            .into(teacher_entities_1.TeacherModel)
            .values({
            age,
            first_name,
            last_name,
            phone_number,
            subjects: subject_id,
            img: `/img/${filename}`,
        })
            .returning('*')
            .execute();
        console.log(raw);
        return res.send(raw);
    }
    catch (error) {
        console.log(error);
    }
};
exports.TeacherCreate = TeacherCreate;
const TeacherUpdate = async (req, res) => {
    try {
        const { id } = req?.params;
        const { first_name, last_name, age, phone_number, subject_id, } = req.body;
        const data = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel).find();
        const newData = data?.find((e) => e.id == +id);
        if (!newData) {
            return res.status(400).json({
                status: 400,
                message: 'Not fund',
            });
        }
        let filename = req?.file?.filename;
        if (filename) {
            const { raw } = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel)
                .createQueryBuilder()
                .update(teacher_entities_1.TeacherModel)
                .set({
                age,
                first_name,
                last_name,
                phone_number,
                img: `/img/${filename}`,
                subjects: subject_id,
            })
                .where('id = :id', { id: id })
                .returning('*')
                .execute();
            if (!raw.length) {
                res.status(400).json({
                    status: 400,
                    message: 'Not fund',
                });
            }
            return res.status(200).json({
                status: 200,
                message: 'Successful',
                data: raw,
            });
        }
        const newImg = newData?.img?.split('/')[2];
        const { raw } = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel)
            .createQueryBuilder()
            .update(teacher_entities_1.TeacherModel)
            .set({
            age,
            first_name,
            last_name,
            phone_number,
            img: `/img/${newImg}`,
        })
            .where('id = :id', { id: id })
            .returning('*')
            .execute();
        if (!raw.length) {
            res.status(400).json({
                status: 400,
                message: 'Not fund',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'Successful',
            data: raw,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.TeacherUpdate = TeacherUpdate;
const TeacherDelete = async (req, res) => {
    try {
        const { id } = req?.params;
        const { raw } = await config_1.AppDataSource.getRepository(teacher_entities_1.TeacherModel)
            .createQueryBuilder()
            .delete()
            .from(teacher_entities_1.TeacherModel)
            .where('id = :id', { id: id })
            .returning('*')
            .execute();
        if (!raw.length) {
            res.status(400).json({
                status: 400,
                message: 'Not fund',
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Successful',
            data: raw,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.TeacherDelete = TeacherDelete;
