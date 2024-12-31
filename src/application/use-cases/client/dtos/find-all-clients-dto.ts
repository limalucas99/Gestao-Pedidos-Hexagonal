import { IsDefined, IsInt } from 'class-validator';

export class FindAllClientsDto {
  @IsDefined()
  @IsInt()
  page: number;

  @IsDefined()
  @IsInt()
  pageSize: number;
}