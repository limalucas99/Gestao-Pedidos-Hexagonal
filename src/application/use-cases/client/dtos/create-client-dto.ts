import { IsDefined, IsEmail, IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  
  @IsDefined()
  @IsString()
  @MinLength(3)
  name: string;

  @IsDefined()
  @IsEmail()
  @MinLength(3)
  email: string;
  
  @IsDefined()
  @IsString()
  @MinLength(3)
  cpf: string;
}