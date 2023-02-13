import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { AppJwtModule } from '../auth/app-jwt/app-jwt.module';
import { produtoPedidoRepository } from './repository/pedido-produto.repository';
import { pedidoRepository } from './repository/pedido.repository';
import { DatabaseExeceptionsModule } from '../database/database-execeptions/database-execeptions.module';
import { entityManager } from './repository/entityManager';
import { DatabaseModule } from '../database/database.module';
import { produtoRepository } from '../produtos/repository/produtos.repository';

@Module({
  imports: [AppJwtModule,DatabaseExeceptionsModule,DatabaseModule],
  controllers: [PedidosController],
  providers: [PedidosService,...produtoPedidoRepository,...pedidoRepository,...entityManager,...produtoRepository]
})
export class PedidosModule {}
