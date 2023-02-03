import { HttpException, Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';
import { Lojas } from './model/lojas.entity';

@Injectable()
export class LojasService {
  constructor(
    @Inject('LOJAS_REPOSITORY')
    private repository :Repository<Lojas>
  ){}
  async create(createLojaDto: CreateLojaDto,id :number) {
try {
  const loja = {
    cnpj: createLojaDto.cnpj,
    nome: createLojaDto.nome,
    idDono:id
  }
  return await this.repository.save(loja)
} catch (error) {
  if(error.code == 23505){
    return new HttpException('A loja ja foi cadastrada',403)
  }
  if(error.code == 23503){
    return new HttpException('O usuario não esta Cadastrado',400)
  }
}
  }

  async findAll() {
    return await this.repository.find()
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
}
