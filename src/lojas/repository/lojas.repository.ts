import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Lojas } from '../model/lojas.entity'

export const lojasRepository :Array<Provider> = [
    {
      provide: 'LOJAS_REPOSITORY',
      useFactory: (datasource :DataSource) => datasource.getRepository(Lojas),
      inject: ['DATA_SOURCE'],
    },
]