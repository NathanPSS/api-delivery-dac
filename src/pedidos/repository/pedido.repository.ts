import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { Pedido } from '../model/pedidos.entity'

export const pedidoRepository :Array<Provider> = [
    {
      provide: 'PEDIDO_REPOSITORY',
      useFactory: (datasource :DataSource) => datasource.getRepository(Pedido),
      inject: ['DATA_SOURCE'],
    },
]