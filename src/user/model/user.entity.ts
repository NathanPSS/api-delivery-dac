import { Lojas } from "../../lojas/model/lojas.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../../pedidos/model/pedidos.entity";


@Entity()
export class Users {

    @PrimaryGeneratedColumn("increment",{type:"int"})
    id: number

    @Column({type:"varchar",length:200})
    nome: string
    
    @Column({type:"varchar",length:300,unique:true})
    email: string

    @Column({type:"text"})
    password: string

    @Column({type:"varchar",length: 500})
    endereco: string
  
    @Column({type:"varchar",length:300})
    telefone:string

    @OneToMany(type => Lojas, lojas => lojas.idDono,{nullable:false,createForeignKeyConstraints:true})
    lojas: Lojas[]


    @OneToMany(type => Pedido, pedido => pedido.idUser,{nullable:false,createForeignKeyConstraints:true})
    pedidos: Pedido[]

    serializable(){
        return {
            id: this.id,
            username: this.email
        }
    }
}
