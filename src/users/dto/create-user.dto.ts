import { IsNotEmpty, Length, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
  
  @IsNotEmpty({ message: 'El usuario es obligatorio' })
  @Length(3, 100, { message: 'El usuario debe tener entre 3 y 100 caracteres' })
  usuario: string;

  @IsOptional()
  @Length(6, 60, { message: 'La contraseña debe tener entre 6 y 60 caracteres' })
  password?: string;

  @IsOptional()
  @Length(1, 70, { message: 'El nombre debe tener entre 1 y 70 caracteres' })
  nombre?: string;

  @IsBoolean({ message: 'El campo activo debe ser booleano' })
  activo: boolean;

 
}
