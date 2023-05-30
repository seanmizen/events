import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string

  @Column({ unique: true, nullable: false, default: () => `'${uuidv4()}'` })
  uuid: string

  @Column({ length: 255 })
  name: string

  @Column({ length: 255 })
  description: string

  @Column({ type: 'timestamp' })
  startDate: Date

  @Column({ type: 'timestamp', nullable: true })
  endDate?: Date

  @Column({ default: false })
  allDay: boolean

  @BeforeInsert()
  generateUuid() {
    this.uuid = uuidv4()
  }
}
