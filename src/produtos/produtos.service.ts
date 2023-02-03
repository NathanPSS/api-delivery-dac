import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './model/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private repository :Repository<Produto>
  ){}
  create(createProdutoDto: CreateProdutoDto) {
    
  }

  findAll() {
    return `This action returns all produtos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
