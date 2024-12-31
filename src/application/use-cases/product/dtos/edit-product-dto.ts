import { IsDefined, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class EditProductDto {

  @IsDefined()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;
}