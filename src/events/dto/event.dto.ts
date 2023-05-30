import { ApiProperty } from '@nestjs/swagger'

export class EventDto {
  @ApiProperty()
  id: string

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
