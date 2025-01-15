import { IsDefined, IsString, MaxLength } from 'class-validator';

export class FindClientByCpfDto {
  @IsDefined()
  @IsString()
  @MaxLength(11)
  cpf: string;
}