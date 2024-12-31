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

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsDefined()
  @IsUUID()
  categoryId: string;
}