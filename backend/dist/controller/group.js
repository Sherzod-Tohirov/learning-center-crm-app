"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupUpdate = exports.GroupDelete = exports.GroupCreate = exports.GroupGetOne = exports.GroupGet = void 0;
const config_1 = require("../config");
const group_entities_1 = require("../entities/group.entities");
const GroupGet = async (req, res) => {
    try {
        const data = await config_1.AppDataSource.getRepository(group_entities_1.GroupModel).find({
            relations: {
                weeks: true,
                teachers: true,
                students: true,
                subjects: true,
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
exports.GroupGet = GroupGet;
const GroupGetOne = async (req, res) => {
    try {
        const { id } = req?.params;
        const data = await config_1.AppDataSource.getRepository(group_entities_1.GroupModel).find({
            relations: {
                weeks: true,
                teachers: true,
                students: true,
                subjects: true,
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
exports.GroupGetOne = GroupGetOne;
const GroupCreate = async (req, res) => {
    try {
        const { group_name, group_time_start, group_time_stop, week_id, teacher_id, subject_id: id, } = req.body;
        const subject_id = id;
        const { raw } = await config_1.AppDataSource.getRepository(group_entities_1.GroupModel)
            .createQueryBuilder()
            .insert()
            .into(group_entities_1.GroupModel)
            .values({
            group_name,
            group_time_start,
            group_time_stop,
            subjects: subject_id,
            weeks: week_id,
            teachers: teacher_id,
        })
            .returning('*')
            .execute();
        return res.send(raw);
    }
    catch (error) {
        console.log(error);
    }
};
exports.GroupCreate = GroupCreate;
const GroupUpdate = async (req, res) => {
    try {
        const { id } = req?.params;
        const { group_name, group_time_start, group_time_stop, week_id, teacher_id, subject_id, } = req.body;
        const data = await config_1.AppDataSource.getRepository(group_entities_1.GroupModel).find();
        const newData = data?.find((e) => e.id == +id);
        if (!newData) {
            return res.status(400).json({
                status: 400,
                message: 'Not fund',
            });
        }
        const { raw } = await config_1.AppDataSource.getRepository(group_entities_1.GroupModel)
            .createQueryBuilder()
            .update(group_entities_1.GroupModel)
            .set({
            group_name,
            group_time_start,
            group_time_stop,
            teachers: teacher_id,
            weeks: week_id,
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
    catch (error) {
        console.log(error);
    }
};
exports.GroupUpdate = GroupUpdate;
const GroupDelete = async (req, res) => {
    try {
        const { id } = req?.params;
        const { raw } = await config_1.AppDataSource.getRepository(group_entities_1.GroupModel)
            .createQueryBuilder()
            .delete()
            .from(group_entities_1.GroupModel)
            .where('id = :id', { id: +id })
            .returning('*')
            .execute();
        console.log(raw);
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
exports.GroupDelete = GroupDelete;
