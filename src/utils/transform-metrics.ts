const TRANSFORM_TO = 10;

export const decimetersToMeters = (heightInDecimeters: number) =>
	heightInDecimeters / TRANSFORM_TO;
export const hectogramToKg = (weightInHectogram: number) =>
	weightInHectogram / TRANSFORM_TO;

export const kgToHectogram = (weightInKg: number) => weightInKg * 10;

export const cmToDecimeter = (lengthInCm: number) => lengthInCm / 10;

export const decimeterToCentimeter = (lengthInDecimeter: number) =>
	lengthInDecimeter * TRANSFORM_TO;
