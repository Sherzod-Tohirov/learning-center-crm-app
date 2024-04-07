"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdate = exports.StudentDelete = exports.StudentCreate = exports.StudentGetOne = exports.StudentGet = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const student_entities_1 = require("../entities/student.entities");
const StudentGet = async (req, res) => {
    try {
        const name = req?.query?.name;
        if (!name) {
            const data = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel).find({
                relations: {
                    groups: {
                        teachers: true,
                    },
                },
            });
            return res.send({
                status: 200,
                message: 'Success',
                data,
            });
        }
        const data = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel).find({
            where: {
                first_name: (0, typeorm_1.ILike)(`%${name}%`),
            },
            relations: {
                groups: {
                    teachers: true,
                },
            },
        });
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
exports.StudentGet = StudentGet;
const StudentGetOne = async (req, res) => {
    try {
        const { id } = req?.params;
        const data = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel).find({
            relations: {
                groups: {
                    teachers: true,
                },
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
exports.StudentGetOne = StudentGetOne;
const StudentCreate = async (req, res) => {
    try {
        const { first_name, last_name, age, phone_number, parent_name, parent_phone_number, group_id, } = req.body;
        const { raw } = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel)
            .createQueryBuilder()
            .insert()
            .into(student_entities_1.StudentModel)
            .values({
            age,
            first_name,
            groups: group_id,
            last_name,
            parent_name,
            parent_phone_number,
            phone_number,
        })
            .returning('*')
            .execute();
        return res.send(raw);
    }
    catch (error) {
        console.log(error);
    }
};
exports.StudentCreate = StudentCreate;
const StudentUpdate = async (req, res) => {
    try {
        const { id } = req?.params;
        const { first_name, last_name, age, phone_number, parent_name, parent_phone_number, group_id, } = req.body;
        const data = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel).find();
        const newData = data?.find((e) => e.id == +id);
        if (!newData) {
            return res.status(400).json({
                status: 400,
                message: 'Not fund',
            });
        }
        const { raw } = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel)
            .createQueryBuilder()
            .update(student_entities_1.StudentModel)
            .set({
            age,
            first_name,
            groups: group_id,
            last_name,
            parent_name,
            parent_phone_number,
            phone_number,
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
exports.StudentUpdate = StudentUpdate;
const StudentDelete = async (req, res) => {
    try {
        const { id } = req?.params;
        const { raw } = await config_1.AppDataSource.getRepository(student_entities_1.StudentModel)
            .createQueryBuilder()
            .delete()
            .from(student_entities_1.StudentModel)
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
exports.StudentDelete = StudentDelete;
