import { ArrayNotEmpty, IsArray, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateOrderDto {
  
    @IsOptional()
    @IsString()
    @MaxLength(11)
    clientCpf: string;
  
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('4', { each: true })
    products: string[];

}