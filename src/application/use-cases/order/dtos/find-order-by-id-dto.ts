import { IsDefined, IsUUID} from 'class-validator';

export class FindOrderByIdDto {
  @IsDefined()
  @IsUUID()
  id: string;
}