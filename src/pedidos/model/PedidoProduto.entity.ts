import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Produto } from "../../produtos/model/produto.entity";
import { Pedido } from "./pedidos.entity";

@Entity()
export class PedidoProduto {
    
    @PrimaryColumn()
    @OneToOne((type => Pedido), pedido => pedido.id,{nullable:true,createForeignKeyConstraints:true,cascade:true})
    idPedido: number
    
    @PrimaryColumn()
    @OneToOne((type => Produto), produto => produto.id,{nullable:true,createForeignKeyConstraints:true,cascade:true})
    idProduto: number

    @Column({type: 'integer'})
    quantidade: number

}