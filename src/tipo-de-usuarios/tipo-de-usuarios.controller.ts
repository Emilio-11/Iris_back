import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDeUsuariosService } from './tipo-de-usuarios.service';
import { CreateTipoDeUsuarioDto } from './dto/create-tipo-de-usuario.dto';
import { UpdateTipoDeUsuarioDto } from './dto/update-tipo-de-usuario.dto';


@Controller('tipo-de-usuarios')
export class TipoDeUsuariosController {
  constructor(private readonly tipoDeUsuariosService: TipoDeUsuariosService) {}

  @Post()
  create(@Body() createTipoDeUsuarioDto: CreateTipoDeUsuarioDto) {
    return this.tipoDeUsuariosService.create(createTipoDeUsuarioDto);
  }

  @Get()
  findAll() {
    return this.tipoDeUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDeUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDeUsuarioDto: UpdateTipoDeUsuarioDto) {
    return this.tipoDeUsuariosService.update(+id, updateTipoDeUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDeUsuariosService.remove(+id);
  }
}
