import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import appConfig from './app.config'
import { AppController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      ignoreEnvFile: false,
      isGlobal: true,
      load: [appConfig],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
