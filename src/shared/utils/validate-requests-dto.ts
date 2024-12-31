import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';

export function validateDto(dto: ClassConstructor<Object>, validationObj: Object): ValidationError[] {
  const currentDto = plainToInstance(dto, validationObj);
  const errors = validateSync(currentDto);
  return errors;
}