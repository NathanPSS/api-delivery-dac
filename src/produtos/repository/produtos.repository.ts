import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Produto } from '../model/produto.entity'

export const produtoRepository :Array<Provider> = [
    {
      provide: 'PRODUTO_REPOSITORY',
      useFactory: (datasource :DataSource) => datasource.getRepository(Produto),
      inject: ['DATA_SOURCE'],
    },
]