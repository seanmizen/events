import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateEventDto } from './create-event.dto'

export class UpdateEventDto extends PartialType(CreateEventDto) {
  // overwrite the id property to be required
  @ApiProperty()
  id: string
}
