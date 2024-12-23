import { IsString, MinLength } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  category: string;

  @IsString()
  @MinLength(3)
  description: string;

  @IsString()
  @MinLength(3)
  price: number;
}