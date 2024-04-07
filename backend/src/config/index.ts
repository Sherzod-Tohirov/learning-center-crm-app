import { DataSource } from 'typeorm'
import 'dotenv/config'
import { WeekModel } from '../entities/week.entities'
import { SubjectModel } from '../entities/subject.entities'
import { TeacherModel } from '../entities/teacher.entities'
import { GroupModel } from '../entities/group.entities'
import { StudentModel } from '../entities/student.entities'
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [WeekModel, SubjectModel, TeacherModel, GroupModel, StudentModel],
})
