import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { GroupModel } from './group.entities'

@Entity({
  name: 'student',
})
export class StudentModel {
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
  parent_name: string

  @Column()
  parent_phone_number: number

  @ManyToOne(() => GroupModel, (group_id) => group_id.students)
  groups: GroupModel[]
}
