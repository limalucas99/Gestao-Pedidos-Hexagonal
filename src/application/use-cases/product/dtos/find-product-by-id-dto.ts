import { IsDefined, IsUUID,  } from 'class-validator';

export class FindProductByIdDto {
  @IsDefined()
  @IsUUID()
  id: string;
}