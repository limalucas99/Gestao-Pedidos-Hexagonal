import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

function validateDto(dto: ClassConstructor<Object>, validationObj: Object): ValidationError[] {
  const currentDto = plainToInstance(dto, validationObj);
  const errors = validateSync(currentDto);
  return errors;
}

function getRequestAttributes (req: Request) {
  const { body, params, query } = req;
  const attributes: { [key: string]: string } = {};
  if (Object.keys(body).length !== 0) Object.assign(attributes, { ...body });
  if (Object.keys(params).length !== 0) Object.assign(attributes, { ...params });
  if (Object.keys(query).length !== 0) Object.assign(attributes, { ...query });
  return attributes;
}

function convertNumericFields (validationData: { [key: string]: string | number | Date }, numericFields: string[]) {
  numericFields.forEach((field) => {
    if (validationData[field]) {
      validationData[field] = Number(validationData[field]);
    }
  });
  return validationData;
}

export function validateRequestMiddleware(dto: ClassConstructor<Object>, numericFields: string[] = []) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {

      const validationData = convertNumericFields(getRequestAttributes(req), numericFields);

      const errors = validateDto(dto, validationData);

      if (errors.length > 0) {
        return res.status(400).json({
          message: 'Validation failed',
          errors: errors.map((err) => ({
            property: err.property,
            constraints: err.constraints,
          })),
        });
      }
      
      next();
    } catch (error) {
      return res.status(500).json({
        message: 'Internal server error',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };
}
