import { ArrayNotEmpty, IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  
    @IsOptional()
    @IsString()
    clientCpf: string;
  
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('4', { each: true })
    products: string[];

}