import { HttpException, Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DatabaseExeceptionsModule } from '../database/database-execeptions/database-execeptions.module';
import { IDatabaseExeptions } from '../database/database-execeptions/IDatabaseExceptions';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Lojas } from './model/lojas.entity';

@Injectable()
export class LojasService {
  constructor(
    @Inject('LOJAS_REPOSITORY')
    private repository :Repository<Lojas>,
    @Inject('EXCEPTIONS_POSTGREE')
    private execeptions :IDatabaseExeptions
  ){}
  async create(createLojaDto: CreateLojaDto,id :number) {
try {
  const loja = {
    cnpj: createLojaDto.cnpj,
    nome: createLojaDto.nome,
    idDono: id
  }
  console.log(loja)
  return await this.repository.save(loja)
} catch (error) {
 return this.execeptions.checkError(error)
}
  }
 async findOne(id: number) {
    try {
      return await this.repository.findOneByOrFail({id:id})
    } catch (error) {
      return new NotFoundException()
    }
  }

  async update(id: number, updateLojaDto: UpdateLojaDto) {
    return await this.repository.update({id:id},updateLojaDto)
  }

 async remove(id: number) {
    return await this.repository.delete({id:id})
  }
  async findAllUser(id :number){
    return await this.repository.findBy({idDono:id})
  }
}
