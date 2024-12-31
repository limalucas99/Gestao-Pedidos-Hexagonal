import { IsDefined, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  
  @IsDefined()
  @IsString()
  @MinLength(3)
  name: string;

  @IsDefined()
  @IsString()
  @MinLength(3)
  description: string;
}