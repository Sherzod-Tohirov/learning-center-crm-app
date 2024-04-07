import { Request, Response } from 'express'
import { AppDataSource } from '../config'
import { TeacherModel } from '../entities/teacher.entities'
import path from 'path'
import { ILike } from 'typeorm'
const TeacherGet = async (req: Request, res: Response) => {
  try {
    const name = req?.query?.name as any

    if (!name) {
      const data = await AppDataSource.getRepository(TeacherModel).find({
        relations: {
          subjects: true,
          groups: true,
        },
      })
      return res.send({
        status: 200,
        message: 'Success',
        data,
      })
    }

    const data = await AppDataSource.getRepository(TeacherModel).find({
      where: {
        first_name: ILike(`%${name}%`),
      },
      relations: {
        subjects: true,
        groups: true,
      },
    })

    console.log(data)

    return res.send({
      status: 200,
      message: 'Success',
      data,
    })
  } catch (error) {
    console.log(error)
  }
}

const ImgGet = async (req: Request, res: Response) => {
  try {
    const { file } = req.params
    res.sendFile(path.join(process.cwd(), 'uploads', file))
  } catch (error) {
    console.log(error)
  }
}

const TeacherGetOne = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params as any

    const data = await AppDataSource.getRepository(TeacherModel).find({
      relations: {
        subjects: true,
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

const TeacherCreate = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      age,
      phone_number,
      subject_id: id,
    } = req.body as crm
    let { filename } = req?.file as any
    const subject_id = id as any
    const { raw } = await AppDataSource.getRepository(TeacherModel)
      .createQueryBuilder()
      .insert()
      .into(TeacherModel)
      .values({
        age,
        first_name,
        last_name,
        phone_number,
        subjects: subject_id,
        img: `/img/${filename}`,
      })
      .returning('*')
      .execute()

    console.log(raw)

    return res.send(raw)
  } catch (error) {
    console.log(error)
  }
}

const TeacherUpdate = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params
    const {
      first_name,
      last_name,
      age,
      phone_number,
      subject_id,
    } = req.body as crm

    const data = await AppDataSource.getRepository(TeacherModel).find()

    const newData = data?.find((e) => e.id == +id)

    if (!newData) {
      return res.status(400).json({
        status: 400,
        message: 'Not fund',
      })
    }

    let filename = req?.file?.filename as any

    if (filename) {
      const { raw } = await AppDataSource.getRepository(TeacherModel)
        .createQueryBuilder()
        .update(TeacherModel)
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
    }

    const newImg = newData?.img?.split('/')[2]
    const { raw } = await AppDataSource.getRepository(TeacherModel)
      .createQueryBuilder()
      .update(TeacherModel)
      .set({
        age,
        first_name,
        last_name,
        phone_number,
        img: `/img/${newImg}`,
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
const TeacherDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req?.params

    const { raw } = await AppDataSource.getRepository(TeacherModel)
      .createQueryBuilder()
      .delete()
      .from(TeacherModel)
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
  TeacherGet,
  TeacherGetOne,
  TeacherCreate,
  TeacherDelete,
  TeacherUpdate,
  ImgGet,
}
