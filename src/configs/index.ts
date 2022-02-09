import development from "./development"
import production from './production'

import { IConfig } from '../interface'

const defaults = {
    port : process.env.PORT || 4000,
    env : process.env.NODE_ENV || 'development',
}

let config: IConfig

switch (defaults.env) {
    case 'development':
      config = Object.assign(defaults, development)
      break
    case 'production':
      config = Object.assign(defaults, production)
      break
    default:
      config = Object.assign(defaults, development)
      break
  }

export default config