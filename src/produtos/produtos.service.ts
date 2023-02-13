import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IDatabaseExeptions } from '../database/database-execeptions/IDatabaseExceptions';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './model/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private repository :Repository<Produto>,
    @Inject('EXCEPTIONS_POSTGREE')
    private execeptions :IDatabaseExeptions
  ){}
  async create(createProdutoDto: CreateProdutoDto, idLoja :number) {
    const produtoRow = {
      ...createProdutoDto,
      lojaId:idLoja
    }
    try {
      return await this.repository.save(produtoRow)
    } catch (error) {
      this.execeptions.checkError(error)
    }
  }

 async findAll() {
   try {
    return await this.repository.find()
   } catch (error) {
    this.execeptions.checkError(error)
   }
  }

 async findOne(id: number) {
    try {
      return await this.repository.findOne({where:{id:id}})
    } catch (error) {
      this.execeptions.checkError(error)
    }
  }

 async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    try {
      return await this.repository.update({id:id},updateProdutoDto)
    } catch (error) {
      this.execeptions.checkError(error)
    }
  }

 async remove(id: number) {
   try {
    return await this.repository.delete({id:id})
   } catch (error) {
    this.execeptions.checkError(error)
   }
  }
}
