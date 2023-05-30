import { ApiProperty } from '@nestjs/swagger'

export const EXAMPLE_EVENT = {
  name: 'My Event',
  description: 'This is my event',
  startDate: new Date('2023-05-30T15:00:00.000Z'),
  endDate: new Date('2023-05-30T16:00:00.000Z'),
  allDay: false,
}

export class EventDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  startDate: Date

  @ApiProperty({ required: false })
  endDate?: Date

  @ApiProperty()
  allDay: boolean
}
