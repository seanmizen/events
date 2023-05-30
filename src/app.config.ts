import { readFileSync } from 'fs'
import { join } from 'path'

export interface AppConfig {
  name: string
  version: string
  description: string
}

export default (): { app: AppConfig } => {
  const pjson = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), { encoding: 'utf8' }))

  return {
    app: {
      name: pjson.name,
      version: pjson.version,
      description: pjson.description,
    },
  }
}
