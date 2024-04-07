import { Request, Response } from 'express'
import { AppDataSource } from '../config'
import { WeekModel } from '../entities/week.entities'

const WeekGet = async (req: Request, res: Response) => {
  try {
    let array = ['DU-CHO-JUM', 'SE-PA-SHA']
    const newdata = await AppDataSource.getRepository(WeekModel).find()
    if (!newdata.length) {
      for (const e of array) {
        const { raw } = await AppDataSource.getRepository(WeekModel)
          .createQueryBuilder()
          .insert()
          .into(WeekModel)
          .values({
            week_name: e,
          })
          .returning('*')
          .execute()
      }
    }
    const data = await AppDataSource.getRepository(WeekModel).find()
    return res.send({
      status: 200,
      message: 'Success',
      data,
    })
  } catch (error) {
    console.log(error)
  }
}

const WeekCreate = async (req: Request, res: Response) => {
  try {
    const { week_name } = req.body as crm

    const { raw } = await AppDataSource.getRepository(WeekModel)
      .createQueryBuilder()
      .insert()
      .into(WeekModel)
      .values({
        week_name,
      })
      .returning('*')
      .execute()

    console.log(raw)

    return res.send(raw)
  } catch (error) {
    console.log(error)
  }
}

const WeekUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params
    const { week_name } = req.body as crm

    const { raw } = await AppDataSource.getRepository(WeekModel)
      .createQueryBuilder()
      .update(WeekModel)
      .set({
        week_name,
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
const WeekDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params

    console.log(id)

    const { raw } = await AppDataSource.getRepository(WeekModel)
      .createQueryBuilder()
      .delete()
      .from(WeekModel)
      .where('id = :id', { id: id })
      .returning('*')
      .execute()

    console.log(raw, 'data')

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

export { WeekGet, WeekCreate, WeekDelete, WeekUpdate }
