import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { getMetadataStorage } from 'class-validator';

export const generateSchemas = () => {
  const metadataStorage = getMetadataStorage();

  const schemas = validationMetadatasToSchemas({
    classValidatorMetadataStorage: metadataStorage,
  });

  return schemas;
};
