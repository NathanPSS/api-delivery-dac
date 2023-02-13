import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Produto } from '../model/produto.entity'

export const produtoRepositoryTest :Array<Provider> = [
    {
      provide: 'PRODUTO_REPOSITORY_TEST',
      useFactory: (datasource :DataSource) => datasource.getRepository(Produto),
      inject: ['DATA_SOURCE_TEST'],
    },
]