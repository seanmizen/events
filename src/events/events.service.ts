import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEventDto } from './dto/create-event.dto'
import { UpdateEventDto } from './dto/update-event.dto'
import { Event } from './entities'

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = this.eventRepository.create(createEventDto)
    return this.eventRepository.save(event)
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find()
  }

  // TODO: cache large queries like this one, serverside paginate, and use a search index
  async findAllIdsAndNames(): Promise<{ id: string; name: string }[]> {
    const events = await this.eventRepository.find()
    return events.map(({ id, name }) => ({ id, name }))
  }

  async findOne(id: string): Promise<Event> {
    return this.eventRepository.findOneBy({ id })
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    const event = await this.findOne(id)
    if (!event) throw new Error('Event not found')
    const updatedEvent = { ...event, ...updateEventDto }
    return this.eventRepository.save(updatedEvent)
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id)
  }
}
