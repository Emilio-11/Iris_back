import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import {TipoDeUsuario} from 'src/tipo-de-usuarios/entities/tipo-de-usuario.entity'


@Entity('usuario')
export class User {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  usuario: string;

  @Column({ type: 'varchar', length: 60, nullable: true, default: null })
  
  password?: string;

  @Column({ type: 'varchar', length: 70, nullable: true, default: null })
  nombre?: string;

  @Column({ type: 'boolean', nullable: false })
  activo: boolean;

  @ManyToOne(() => TipoDeUsuario, (tipoUsuario) => tipoUsuario.usuarios, { nullable: false })
  @JoinColumn({ name: 'idTipoUsuario' })
  tipoUsuario: TipoDeUsuario;
}
