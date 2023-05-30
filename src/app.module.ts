import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'

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
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          type: 'postgres',
          host: configService.get('POSTGRES_HOST'),
          port: configService.get('POSTGRES_PORT'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DATABASE'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          migrationsTableName: 'migration',
          migrations: ['dist/migration/*.js'],
          cli: {
            migrationsDir: 'src/database/migration',
          },
          ssl: configService.get('NODE_ENV') === 'production',
          synchronize: true,
        } as TypeOrmModuleOptions),
      inject: [ConfigService],
    }),
    EventsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
