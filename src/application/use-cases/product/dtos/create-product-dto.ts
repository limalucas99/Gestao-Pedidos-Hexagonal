import { IsBoolean, IsDefined, IsOptional, IsString, IsUUID, Max, maxLength, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsDefined()
  @IsString()
  @MaxLength(60)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsDefined()
  @IsString()
  @MaxLength(14)
  price: string;

  @IsDefined()
  @IsUUID()
  categoryId: string;
}