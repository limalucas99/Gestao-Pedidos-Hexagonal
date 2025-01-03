import { IsDefined, IsString } from 'class-validator';

export class FindClientByCpfDto {
  @IsDefined()
  @IsString()
  cpf: string;
}