import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PedidosModule } from './pedidos/pedidos.module';
import { LojasModule } from './lojas/lojas.module';
import { ProdutosModule } from './produtos/produtos.module';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';






@Module({
  imports: [UserModule,ConfigModule.forRoot(), PedidosModule, LojasModule, ProdutosModule,DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
