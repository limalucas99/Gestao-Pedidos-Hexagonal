import { IsDefined, IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClientDto {
  
  @IsDefined()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsDefined()
  @IsEmail()
  email: string;
  
  @IsDefined()
  @IsString()
  @MaxLength(11)
  cpf: string;
}