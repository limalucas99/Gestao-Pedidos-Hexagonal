import { IsDefined, IsInt } from 'class-validator';

export class FindAllOrdersDto {
  @IsDefined()
  @IsInt()
  page: number;

  @IsDefined()
  @IsInt()
  pageSize: number;
}