import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lojas } from "../../lojas/model/lojas.entity";
import { Produto } from "../../produtos/model/produto.entity";
import { Users } from "../../user/model/user.entity";
import { PedidoProduto } from "./PedidoProduto.entity";


@Entity() 
export class Pedido {

    @PrimaryGeneratedColumn("increment",{type:"int"})
    id: number

    @ManyToOne((type => Users), user => user.pedidos,{nullable:true,createForeignKeyConstraints:true})
    idUser: number

    @ManyToOne((type => Lojas), lojas => lojas.pedidos,{nullable:true,createForeignKeyConstraints:true})
    idLojas: number

    @OneToOne((type => PedidoProduto), pedidoproduto => pedidoproduto.idPedido,{nullable:false,createForeignKeyConstraints:true})
    produtos: PedidoProduto[]
}