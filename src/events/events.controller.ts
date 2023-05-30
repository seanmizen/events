import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EventsService } from './events.service'
import { CreateEventDto, UpdateEventDto } from './dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto)
  }

  @Get()
  findAll() {
    return this.eventsService.findAll()
  }

  @Get('ids-and-names')
  findAllIdsAndNames() {
    return this.eventsService.findAllIdsAndNames()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id)
  }
}
