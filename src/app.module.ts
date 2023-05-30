import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import appConfig from './app.config'
import { AppController } from './app.controller'
import { EventsModule } from './events/events.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      ignoreEnvFile: false,
      isGlobal: true,
      load: [appConfig],
    }),
    EventsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
