import { Request, Response } from 'express'
import { ILike, Like } from 'typeorm'
import { AppDataSource } from '../config'
import { StudentModel } from '../entities/student.entities'
const StudentGet = async (req: Request, res: Response) => {
  try {
    const name = req?.query?.name as any
    if (!name) {
      const data = await AppDataSource.getRepository(StudentModel).find({
        relations: {
          groups: {
            teachers: true,
          },
        },
      })
      return res.send({
        status: 200,
        message: 'Success',
        data,
      })
    }

    const data = await AppDataSource.getRepository(StudentModel).find({
      where: {
        first_name: ILike(`%${name}%`),
      },
      relations: {
        groups: {
          teachers: true,
        },
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

const StudentGetOne = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params as any

    const data = await AppDataSource.getRepository(StudentModel).find({
      relations: {
        groups: {
          teachers: true,
        },
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

const StudentCreate = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      age,
      phone_number,
      parent_name,
      parent_phone_number,
      group_id,
    } = req.body as crm

    const { raw } = await AppDataSource.getRepository(StudentModel)
      .createQueryBuilder()
      .insert()
      .into(StudentModel)
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
      .execute()

    return res.send(raw)
  } catch (error) {
    console.log(error)
  }
}

const StudentUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params
    const {
      first_name,
      last_name,
      age,
      phone_number,
      parent_name,
      parent_phone_number,
      group_id,
    } = req.body as crm

    const data = await AppDataSource.getRepository(StudentModel).find()

    const newData = data?.find((e) => e.id == +id)

    if (!newData) {
      return res.status(400).json({
        status: 400,
        message: 'Not fund',
      })
    }

    const { raw } = await AppDataSource.getRepository(StudentModel)
      .createQueryBuilder()
      .update(StudentModel)
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
const StudentDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params

    const { raw } = await AppDataSource.getRepository(StudentModel)
      .createQueryBuilder()
      .delete()
      .from(StudentModel)
      .where('id = :id', { id: id })
      .returning('*')
      .execute()

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

export {
  StudentGet,
  StudentGetOne,
  StudentCreate,
  StudentDelete,
  StudentUpdate,
}
