import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm'
import { GroupModel } from './group.entities'

@Entity({
  name: 'week',
})
export class WeekModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  week_name: string

  @OneToMany(() => GroupModel, (groups) => groups.weeks)
  groups: GroupModel[]
}
