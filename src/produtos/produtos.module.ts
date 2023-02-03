import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { produtoRepository } from './repository/produtos.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutosController],
  providers: [ProdutosService,...produtoRepository]
})
export class ProdutosModule {}
