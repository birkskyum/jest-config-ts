import type {Config} from 'jest';

const config: Config = {
  transform: {
    // use typescript to convert from esm to cjs
    '[.](m|c)?(ts|js)(x)?$': ['ts-jest', {
        'isolatedModules': true
    }],
  }
}

export default config;