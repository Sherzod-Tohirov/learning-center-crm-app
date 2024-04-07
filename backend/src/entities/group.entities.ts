import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { StudentModel } from './student.entities'
import { SubjectModel } from './subject.entities'
import { TeacherModel } from './teacher.entities'
import { WeekModel } from './week.entities'

@Entity({
  name: 'group',
})
export class GroupModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  group_name: string

  @Column()
  group_time_start: string

  @Column()
  group_time_stop: string

  @ManyToOne(() => WeekModel, (week_id) => week_id.groups)
  weeks: WeekModel

  @ManyToOne(() => SubjectModel, (subject_id) => subject_id.groups)
  subjects: SubjectModel

  @ManyToOne(() => TeacherModel, (teacher_id) => teacher_id.groups)
  teachers: TeacherModel

  @OneToMany(() => StudentModel, (student_id) => student_id.groups)
  students: StudentModel[]
}
