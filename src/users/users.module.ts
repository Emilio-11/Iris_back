import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './entities/user.entity'
import {TipoDeUsuario} from 'src/tipo-de-usuarios/entities/tipo-de-usuario.entity'
@Module({
  imports:[TypeOrmModule.forFeature([User, TipoDeUsuario])],
  controllers: [UsersController],
  providers: [UsersService],
  
})
export class UsersModule {}
