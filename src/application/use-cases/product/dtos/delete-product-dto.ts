import { IsDefined, IsUUID,  } from 'class-validator';

export class DeleteProductDto {
  @IsDefined()
  @IsUUID()
  id: string;
}