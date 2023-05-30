import { Injectable } from '@nestjs/common'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { EXAMPLE_EVENT, EventDto } from './dto'

@Injectable()
export class EventsService {
  eventsInMemory = [EXAMPLE_EVENT]

  create(createEventDto: CreateEventDto) {
    const id = this.eventsInMemory.length + 1
    this.eventsInMemory.push({ id, ...createEventDto } as EventDto)
  }

  findAll() {
    return this.eventsInMemory
  }

  findOne(id: number) {
    return this.eventsInMemory.find(event => event.id === id)
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    const event = this.findOne(id)
    if (!event) throw new Error('Event not found')
    this.eventsInMemory = this.eventsInMemory.map(event => {
      if (event.id === id) {
        return {
          ...event,
          ...updateEventDto,
        }
      }
      return event
    })
  }

  remove(id: number) {
    this.eventsInMemory = this.eventsInMemory.filter(event => event.id !== id)
  }
}
