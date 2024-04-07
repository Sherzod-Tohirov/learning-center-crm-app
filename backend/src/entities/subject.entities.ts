import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { GroupModel } from './group.entities'
import { TeacherModel } from './teacher.entities'

@Entity({
  name: 'subject',
})
export class SubjectModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  subject_name: string

  @OneToMany(() => GroupModel, (groups) => groups.subjects)
  groups: GroupModel[]

  @OneToMany(() => TeacherModel, (teacher_id) => teacher_id.subjects)
  teachers: TeacherModel[]
}
