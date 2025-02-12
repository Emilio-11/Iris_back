import { IsNotEmpty, Length } from "class-validator";
export class CreateTipoDeUsuarioDto {
   
    @IsNotEmpty({ message: 'El tipo de usuario no puede estar vacío' })
    @Length(1, 15, { message: 'El tipo de usuario debe tener entre 1 y 15 caracteres' })
    tipoUsuario: string;

}
