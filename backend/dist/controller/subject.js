"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectUpdate = exports.SubjectDelete = exports.SubjectCreate = exports.SubjectGetOne = exports.SubjectGet = void 0;
const config_1 = require("../config");
const subject_entities_1 = require("../entities/subject.entities");
const SubjectGet = async (req, res) => {
    try {
        const data = await config_1.AppDataSource.getRepository(subject_entities_1.SubjectModel).find({
            relations: {
                groups: true,
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
exports.SubjectGet = SubjectGet;
const SubjectGetOne = async (req, res) => {
    try {
        const { id } = req?.params;
        const data = await config_1.AppDataSource.getRepository(subject_entities_1.SubjectModel).find({
            relations: {
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
exports.SubjectGetOne = SubjectGetOne;
const SubjectCreate = async (req, res) => {
    try {
        const { subject_name } = req.body;
        const { raw } = await config_1.AppDataSource.getRepository(subject_entities_1.SubjectModel)
            .createQueryBuilder()
            .insert()
            .into(subject_entities_1.SubjectModel)
            .values({
            subject_name,
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
exports.SubjectCreate = SubjectCreate;
const SubjectUpdate = async (req, res) => {
    try {
        const { id } = req?.params;
        const { subject_name } = req.body;
        const { raw } = await config_1.AppDataSource.getRepository(subject_entities_1.SubjectModel)
            .createQueryBuilder()
            .update(subject_entities_1.SubjectModel)
            .set({
            subject_name,
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
exports.SubjectUpdate = SubjectUpdate;
const SubjectDelete = async (req, res) => {
    try {
        const { id } = req?.params;
        const { raw } = await config_1.AppDataSource.getRepository(subject_entities_1.SubjectModel)
            .createQueryBuilder()
            .delete()
            .from(subject_entities_1.SubjectModel)
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
exports.SubjectDelete = SubjectDelete;
