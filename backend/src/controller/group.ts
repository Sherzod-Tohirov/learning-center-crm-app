import { Request, Response } from 'express'
import { AppDataSource } from '../config'
import { GroupModel } from '../entities/group.entities'
const GroupGet = async (req: Request, res: Response) => {
  try {
    const data = await AppDataSource.getRepository(GroupModel).find({
      relations: {
        weeks: true,
        teachers: true,
        students: true,
        subjects: true,
      },
    })
    return res.send({
      status: 200,
      message: 'Success',
      data,
    })
  } catch (error) {
    console.log(error)
  }
}

const GroupGetOne = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params as any

    const data = await AppDataSource.getRepository(GroupModel).find({
      relations: {
        weeks: true,
        teachers: true,
        students: true,
        subjects: true,
      },
    })

    const newData = data?.filter((e) => e.id == id)

    if (!newData.length) {
      return res.status(400).json({
        status: 400,
        message: 'Not fund',
      })
    }
    return res.send({
      status: 200,
      message: 'Success',
      data: newData,
    })
  } catch (error) {
    console.log(error)
  }
}

const GroupCreate = async (req: Request, res: Response) => {
  try {
    const {
      group_name,
      group_time_start,
      group_time_stop,
      week_id,
      teacher_id,
      subject_id: id,
    } = req.body as crm

    const subject_id = id as any
    const { raw } = await AppDataSource.getRepository(GroupModel)
      .createQueryBuilder()
      .insert()
      .into(GroupModel)
      .values({
        group_name,
        group_time_start,
        group_time_stop,
        subjects: subject_id,
        weeks: week_id,
        teachers: teacher_id,
      })
      .returning('*')
      .execute()

    return res.send(raw)
  } catch (error) {
    console.log(error)
  }
}

const GroupUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params
    const {
      group_name,
      group_time_start,
      group_time_stop,
      week_id,
      teacher_id,
      subject_id,
    } = req.body as crm

    const data = await AppDataSource.getRepository(GroupModel).find()

    const newData = data?.find((e) => e.id == +id)

    if (!newData) {
      return res.status(400).json({
        status: 400,
        message: 'Not fund',
      })
    }

    const { raw } = await AppDataSource.getRepository(GroupModel)
      .createQueryBuilder()
      .update(GroupModel)
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
      .execute()

    if (!raw.length) {
      res.status(400).json({
        status: 400,
        message: 'Not fund',
      })
    }
    return res.status(200).json({
      status: 200,
      message: 'Successful',
      data: raw,
    })
  } catch (error) {
    console.log(error)
  }
}
const GroupDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params

    const { raw } = await AppDataSource.getRepository(GroupModel)
      .createQueryBuilder()
      .delete()
      .from(GroupModel)
      .where('id = :id', { id: +id })
      .returning('*')
      .execute()

    console.log(raw)

    if (!raw.length) {
      res.status(400).json({
        status: 400,
        message: 'Not fund',
      })
    }
    res.status(200).json({
      status: 200,
      message: 'Successful',
      data: raw,
    })
  } catch (error) {
    console.log(error)
  }
}

export { GroupGet, GroupGetOne, GroupCreate, GroupDelete, GroupUpdate }
