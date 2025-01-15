import { IsDefined, IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class EditProductDto {

  @IsDefined()
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @MaxLength(60)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(14)
  price?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;
}