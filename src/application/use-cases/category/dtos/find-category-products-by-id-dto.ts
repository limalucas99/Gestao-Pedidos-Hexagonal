import { IsDefined, IsInt, IsUUID } from 'class-validator';

export class FindCategoryProductsByIdDto {
  @IsDefined()
  @IsUUID()
  id: string;

  @IsDefined()
  @IsInt()
  page: number;

  @IsDefined()
  @IsInt()
  pageSize: number;
}