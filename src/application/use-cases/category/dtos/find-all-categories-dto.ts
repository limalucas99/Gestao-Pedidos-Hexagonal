import { IsDefined, IsInt } from 'class-validator';

export class FindAllCategoriesDto {

  @IsDefined()
  @IsInt()
  page: number;

  @IsDefined()
  @IsInt()
  pageSize: number;
}