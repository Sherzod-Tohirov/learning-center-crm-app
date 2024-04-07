import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'
import { GroupModel } from './group.entities'
import { SubjectModel } from './subject.entities'

@Entity({
  name: 'teacher',
})
export class TeacherModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  age: number

  @Column()
  phone_number: number

  @Column()
  img: string

  @ManyToOne(() => SubjectModel, (subject_id) => subject_id.teachers)
  subjects: SubjectModel

  @OneToMany(() => GroupModel, (group_id) => group_id.teachers)
  groups: GroupModel[]
}
