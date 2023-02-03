import { Lojas } from "src/lojas/model/lojas.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}
