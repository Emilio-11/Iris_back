import { Module } from '@nestjs/common';
import { TipoDeUsuariosService } from './tipo-de-usuarios.service';
import { TipoDeUsuariosController } from './tipo-de-usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TipoDeUsuario} from './entities/tipo-de-usuario.entity'
import {User} from 'src/users/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([TipoDeUsuario, User])],
  controllers: [TipoDeUsuariosController],
  providers: [TipoDeUsuariosService],
  exports: [TypeOrmModule],
})
export class TipoDeUsuariosModule {}
