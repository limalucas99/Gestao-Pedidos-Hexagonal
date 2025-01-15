import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  
  @IsDefined()
  @IsString()
  @MaxLength(30)
  @MinLength(5)
  name: string;

  @IsDefined()
  @IsString()
  @MaxLength(300)
  @MinLength(10)
  description: string;
}