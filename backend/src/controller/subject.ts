import { Request, Response } from 'express'

import { AppDataSource } from '../config'
import { SubjectModel } from '../entities/subject.entities'

const SubjectGet = async (req: Request, res: Response) => {
  try {
    const data = await AppDataSource.getRepository(SubjectModel).find({
      relations: {
        groups: true,
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

const SubjectGetOne = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params as any

    const data = await AppDataSource.getRepository(SubjectModel).find({
      relations: {
        groups: true,
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

const SubjectCreate = async (req: Request, res: Response) => {
  try {
    const { subject_name } = req.body as crm

    const { raw } = await AppDataSource.getRepository(SubjectModel)
      .createQueryBuilder()
      .insert()
      .into(SubjectModel)
      .values({
        subject_name,
      })
      .returning('*')
      .execute()

    console.log(raw)

    return res.send(raw)
  } catch (error) {
    console.log(error)
  }
}

const SubjectUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params
    const { subject_name } = req.body as crm

    const { raw } = await AppDataSource.getRepository(SubjectModel)
      .createQueryBuilder()
      .update(SubjectModel)
      .set({
        subject_name,
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
const SubjectDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params

    const { raw } = await AppDataSource.getRepository(SubjectModel)
      .createQueryBuilder()
      .delete()
      .from(SubjectModel)
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
  SubjectGet,
  SubjectGetOne,
  SubjectCreate,
  SubjectDelete,
  SubjectUpdate,
}
