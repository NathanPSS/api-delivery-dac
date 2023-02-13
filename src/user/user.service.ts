import { IDatabaseExeptions } from '../database/database-execeptions/IDatabaseExceptions';
import { HashDataService } from '../hash/hash-data/hash-data.service';
import { ForbiddenException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './model/user.entity';

@Injectable()
export class UserService{

  constructor(
   @Inject('USER_REPOSITORY')
   private repository: Repository<Users>,
   @Inject('EXCEPTIONS_POSTGREE')
   private exceptions :IDatabaseExeptions,
   private hash :HashDataService,
  ){}

  async create(createUserDto: CreateUserDto){
    createUserDto.password = await this.hash.hashData(createUserDto.password,10)
    try { 
   await this.repository.save(createUserDto)
} catch (error) {
  this.exceptions.checkError(error);
}
  }

 async findAll() {
  try {
    return await this.repository.find() 
  } catch (error) {
    this.exceptions.checkError(error);
  }
  }

 async findOne(email: string) {
    try {
      return await this.repository.findOneByOrFail({
        email:email
      })
    } catch (error) {
      return new NotFoundException()
    }
  }
 async update(email: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.repository.update({email:email},updateUserDto);
    } catch (error) {
      
    }
  }

 async remove(email: string) {
    try {
      return await this.repository.delete({
        email:email
      })
    } catch (error) {
      
    }
  }
}
