import { Produto } from "../../produtos/model/produto.entity";
import { Users } from "../../user/model/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../../pedidos/model/pedidos.entity";

@Entity()
export class Lojas {

    @PrimaryGeneratedColumn('increment',{type:'int'})
    id: number

    @Column({type:'varchar',length:500,unique:true})
    cnpj: string

    @Column({type:'varchar',length:500})
    nome: string

    @ManyToOne((type => Users), user => user.lojas,{nullable:false,createForeignKeyConstraints:true})
    idDono: number

    @OneToMany(type => Produto, produto => produto.loja)
    produtos: Produto[]

    @OneToOne((type => Pedido), pedido => pedido.idLojas,{nullable:false,createForeignKeyConstraints:true})
    pedidos: Pedido[]
}