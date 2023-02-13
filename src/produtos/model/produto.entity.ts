
import { Lojas } from "../../lojas/model/lojas.entity"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../../pedidos/model/pedidos.entity";
import { PedidoProduto } from "../../pedidos/model/PedidoProduto.entity";


@Entity()
export class Produto {
    @PrimaryGeneratedColumn('increment',{type:'int'})
    id: number

    @Column({type:'varchar',length:300})
    nome: string

    @Column({type:'double precision'})
    preco: number

    @Column({type:'text'})
    imagem: string

    @Column({type:'text'})
    descricao: string

    @ManyToOne(type => Lojas, lojas => lojas.id,{createForeignKeyConstraints:true})
    loja: number

    @ManyToOne(type => PedidoProduto, pedidoproduto => pedidoproduto.idProduto,{createForeignKeyConstraints:true})
    pedido: PedidoProduto[]

    @Column({type: 'text'})
    categoria: string
}
