import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Pedido } from '../model/pedidos.entity'

export const entityManager :Array<Provider> = [
    {
      provide: 'ENTITY_MANAGER',
      useFactory: (datasource :DataSource) => datasource,
      inject: ['DATA_SOURCE'],

    },
]