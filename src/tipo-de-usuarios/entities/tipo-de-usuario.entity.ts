
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {User} from 'src/users/entities/user.entity'

@Entity()
export class TipoDeUsuario {

    @PrimaryGeneratedColumn()
    idTipoUsuario: number;
  
    @Column({ type: 'varchar', length: 15, nullable: false })
    tipoUsuario: string;
  
    @OneToMany(() => User, (usuario) => usuario.tipoUsuario)
    usuarios: User[];

}
