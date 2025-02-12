import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDeUsuarioDto } from './create-tipo-de-usuario.dto';

export class UpdateTipoDeUsuarioDto extends PartialType(CreateTipoDeUsuarioDto) {}
