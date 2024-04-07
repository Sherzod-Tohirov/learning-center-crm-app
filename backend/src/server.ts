import express, { Application } from 'express'
import { AppDataSource } from './config/index'
import group from './router/group.routes'
import student from './router/student.routes'
import subject from './router/subject.routes'
import teacher from './router/teacher.routes'
import week from './router/week.routes'
import cors from 'cors'

function main() {
  try {
    const app: Application = express()
    app.use(express.json())
    AppDataSource.initialize()
      .then(() => console.log('Connectd'))
      .catch((error) => console.log(error.message))

    app.use(cors())
    app.use(week)
    app.use(group)
    app.use(student)
    app.use(subject)
    app.use(teacher)

    app.listen(9090, (): void => {
      console.log(9090)
    })
  } catch (error) {
    console.log(error)
  }
}
main()
