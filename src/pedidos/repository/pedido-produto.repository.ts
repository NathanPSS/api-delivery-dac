import { Provider } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { PedidoProduto } from '../model/PedidoProduto.entity'
import { Pedido } from '../model/pedidos.entity'

export const produtoPedidoRepository :Array<Provider> = [
    {
      provide: 'PRODUTO_PEDIDO_REPOSITORY',
      useFactory: (datasource :DataSource) => datasource.getRepository(PedidoProduto),
      inject: ['DATA_SOURCE'],
    },
]