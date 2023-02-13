import { Inject, Injectable } from '@nestjs/common';
import { EntityManager, In, Repository } from 'typeorm';
import { IDatabaseExeptions } from '../database/database-execeptions/IDatabaseExceptions';
import { Produto } from '../produtos/model/produto.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PedidoProduto } from './model/PedidoProduto.entity';
import { Pedido } from './model/pedidos.entity';

@Injectable()
export class PedidosService {
  constructor(
    @Inject('PEDIDO_REPOSITORY')
    private readonly repositoryPedidos: Repository<Pedido>,
    @Inject('PRODUTO_PEDIDO_REPOSITORY')
    private readonly repositoryPedidoProdutos: Repository<PedidoProduto>,
    @Inject('PRODUTO_REPOSITORY')
    private readonly repositoryProdutos :Repository<Produto>,
    @Inject('EXCEPTIONS_POSTGREE')
    private readonly exeptions: IDatabaseExeptions,
  ){}
 async create(createPedidoDto: CreatePedidoDto,idUser :number,idLojas :number) {
  let produtoData
let produtoSave 
let produtoResponse
   let arrayProdutos = []
const pedido = {
  idUser: idUser,
  idLojas: idLojas
}

try {
  const pedidoRow = await this.repositoryPedidos.save(pedido)
  arrayProdutos = await Promise.all(
    createPedidoDto.produto.map(async (produto) => {
      produtoData = await this.repositoryProdutos.findOne({where:{id:produto.id}})
      produtoSave = {
        idPedido: pedidoRow.id,
        idProduto: produto.id,
        quantidade: produto.quantidade
      }
      produtoResponse = {
        produto : produtoData,
        quantidade :produto.quantidade
      }
      await this.repositoryPedidoProdutos.save(produtoSave)
      return produtoResponse
    })
  )
  const pedidoResponse = {
    ...pedidoRow,
    arrayProdutos
  }
  return pedidoResponse
} catch (error) {
  this.exeptions.checkError(error)
}
 }
 async findAll(idLojas :number)  {
    try {
      return await this.repositoryPedidos.find({where:{idLojas:idLojas}})
    } catch (error) {
      this.exeptions.checkError(error)
    }
  }

  async findOne(id: number) {
    let produtosE = [];
    try {
      const pedidoBase = await this.repositoryPedidos.findOneByOrFail({id: id});
   
      const produtosU = await this.repositoryPedidoProdutos.find({where: {idPedido: id}});
      const promises = produtosU.map(async (produtoU) => {
        const produto = await this.repositoryProdutos.findOne({where: {id: produtoU.idProduto}});
        produtosE.push({produto, quantidade: produtoU.quantidade});
      });
    
      await Promise.all(promises);
    
      const pedidoResponse = {
        produtos: produtosE,
        pedido: pedidoBase
      };
    
      return pedidoResponse;
    } catch (error) {
      this.exeptions.checkError(error);
    }
  }

 async remove(id: number) {
    try {
      return await this.repositoryPedidos.delete({id:id})
    } catch (error) {
     this.exeptions.checkError(error) 
    }
  }
}
