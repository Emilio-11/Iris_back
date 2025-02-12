import { Injectable } from '@nestjs/common';
import { CreateTipoDeUsuarioDto } from './dto/create-tipo-de-usuario.dto';
import { UpdateTipoDeUsuarioDto } from './dto/update-tipo-de-usuario.dto';

@Injectable()
export class TipoDeUsuariosService {
  create(createTipoDeUsuarioDto: CreateTipoDeUsuarioDto) {
    return 'This action adds a new tipoDeUsuario';
  }

  findAll() {
    return `This action returns all tipoDeUsuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDeUsuario`;
  }

  update(id: number, updateTipoDeUsuarioDto: UpdateTipoDeUsuarioDto) {
    return `This action updates a #${id} tipoDeUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDeUsuario`;
  }
}
