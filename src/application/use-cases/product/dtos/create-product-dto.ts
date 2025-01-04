import { IsBoolean, IsDefined, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsDefined()
  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsDefined()
  @IsString()
  price: string;

  @IsDefined()
  @IsUUID()
  categoryId: string;
}