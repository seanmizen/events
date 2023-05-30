import { Controller, Get } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger'

import { VersionDto } from './dto'

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  @ApiOperation({
    summary: 'Hello World',
    description: 'Will return a simple Hello World message',
  })
  @ApiOkResponse({ type: String })
  getHello(): string {
    return 'Hello World!'
  }

  @Get('ping')
  @ApiOperation({
    summary: 'Ping API',
    description: 'Will check the connectivity and the service is reachable',
  })
  @ApiOkResponse({ type: String })
  ping(): string {
    return 'pong'
  }

  @Get('version')
  @ApiOperation({
    summary: 'API Version',
    description: 'Will provide the semantic version of the service at that point in time',
  })
  @ApiOkResponse({ type: VersionDto })
  version(): VersionDto {
    const version = this.config.get<string>('app.version')
    return { version }
  }
}
