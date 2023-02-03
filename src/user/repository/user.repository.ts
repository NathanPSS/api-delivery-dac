import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Users } from '../model/user.entity'

export const userRepository :Array<Provider> = [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (datasource :DataSource) => datasource.getRepository(Users),
      inject: ['DATA_SOURCE'],
    },
]