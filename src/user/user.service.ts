import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './model/user.entity';

@Injectable()
export class UserService {

  constructor(
   @Inject('USER_REPOSITORY')
   private repository: Repository<Users>
  ){}

  async create(createUserDto: CreateUserDto) {
    if(await this.repository.exist({where:{email:createUserDto.email}})){
      return new ForbiddenException()
      }
      return await this.repository.save(createUserDto)
  }

 async findAll() {
     return await this.repository.find()
  }

 async findOne(id: number) {
    try {
      return await this.repository.findOneByOrFail({
        id:id
      })
    } catch (error) {
      return new NotFoundException()
    }
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.repository.update({id:id},updateUserDto);
    } catch (error) {
      
    }
  }

 async remove(id: number) {
    try {
      return await this.repository.delete({
        id:id
      })
    } catch (error) {
      
    }
  }
}
