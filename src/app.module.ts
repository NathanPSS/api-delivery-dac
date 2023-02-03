import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PedidosModule } from './pedidos/pedidos.module';
import { LojasModule } from './lojas/lojas.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriaModule } from './categoria/categoria.module';





@Module({
  imports: [UserModule,ConfigModule.forRoot(), PedidosModule, LojasModule, ProdutosModule, CategoriaModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
