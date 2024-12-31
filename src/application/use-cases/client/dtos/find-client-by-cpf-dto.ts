import { IsDefined, IsString, MinLength } from 'class-validator';

export class FindClientByCpfDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  cpf: string;
}