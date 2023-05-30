import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'

import { AppController } from './app.controller'

describe('AppController', () => {
  let appController: AppController
  let configService: ConfigService

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ConfigService],
    }).compile()

    appController = app.get<AppController>(AppController)
    configService = app.get<ConfigService>(ConfigService)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })

    it('should return pong', () => {
      expect(appController.ping()).toEqual('pong')
    })

    it('should return version number', () => {
      const configSpy = jest.spyOn(configService, 'get').mockReturnValue('1.0.0')

      const version = appController.version()

      expect(configSpy).toBeCalledWith('app.version')
      expect(version).toEqual({ version: '1.0.0' })
    })
  })
})
