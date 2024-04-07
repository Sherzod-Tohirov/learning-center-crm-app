"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekUpdate = exports.WeekDelete = exports.WeekCreate = exports.WeekGet = void 0;
const config_1 = require("../config");
const week_entities_1 = require("../entities/week.entities");
const WeekGet = async (req, res) => {
    try {
        let array = ['DU-CHO-JUM', 'SE-PA-SHA'];
        const newdata = await config_1.AppDataSource.getRepository(week_entities_1.WeekModel).find();
        if (!newdata.length) {
            for (const e of array) {
                const { raw } = await config_1.AppDataSource.getRepository(week_entities_1.WeekModel)
                    .createQueryBuilder()
                    .insert()
                    .into(week_entities_1.WeekModel)
                    .values({
                    week_name: e,
                })
                    .returning('*')
                    .execute();
            }
        }
        const data = await config_1.AppDataSource.getRepository(week_entities_1.WeekModel).find();
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
exports.WeekGet = WeekGet;
const WeekCreate = async (req, res) => {
    try {
        const { week_name } = req.body;
        const { raw } = await config_1.AppDataSource.getRepository(week_entities_1.WeekModel)
            .createQueryBuilder()
            .insert()
            .into(week_entities_1.WeekModel)
            .values({
            week_name,
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
exports.WeekCreate = WeekCreate;
const WeekUpdate = async (req, res) => {
    try {
        const { id } = req?.params;
        const { week_name } = req.body;
        const { raw } = await config_1.AppDataSource.getRepository(week_entities_1.WeekModel)
            .createQueryBuilder()
            .update(week_entities_1.WeekModel)
            .set({
            week_name,
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
exports.WeekUpdate = WeekUpdate;
const WeekDelete = async (req, res) => {
    try {
        const { id } = req?.params;
        console.log(id);
        const { raw } = await config_1.AppDataSource.getRepository(week_entities_1.WeekModel)
            .createQueryBuilder()
            .delete()
            .from(week_entities_1.WeekModel)
            .where('id = :id', { id: id })
            .returning('*')
            .execute();
        console.log(raw, 'data');
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
exports.WeekDelete = WeekDelete;
