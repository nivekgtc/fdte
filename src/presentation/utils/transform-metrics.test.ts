/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import {
	cmToDecimeter,
	decimeterToCentimeter,
	decimetersToMeters,
	hectogramToKg,
	kgToHectogram,
} from './';

describe('Conversions', () => {
	describe('decimetersToMeters', () => {
		it('should convert 70 decimeters to 7 meters', () => {
			expect(decimetersToMeters(70)).toBe(7);
		});

		it('should return 0 when height in decimeters is 0', () => {
			expect(decimetersToMeters(0)).toBe(0);
		});
	});

	describe('hectogramToKg', () => {
		it('should convert 420 hectograms to 42 kilograms', () => {
			expect(hectogramToKg(420)).toBe(42);
		});

		it('should return 0 when weight in hectograms is 0', () => {
			expect(hectogramToKg(0)).toBe(0);
		});
	});

	describe('kgToHectogram', () => {
		it('should convert kg to hectogram correctly', () => {
			const weightInKg = 5;
			const weightInHectogram = kgToHectogram(weightInKg);
			expect(weightInHectogram).toEqual(50);
		});
	});

	describe('cmToDecimeter', () => {
		it('should convert cm to decimeter correctly', () => {
			const lengthInCm = 120;
			const lengthInDecimeter = cmToDecimeter(lengthInCm);
			expect(lengthInDecimeter).toEqual(12);
		});
	});

	describe('decimeterToCentimeter', () => {
		it('should convert decimeter to centimeter correctly', () => {
			const lengthInDecimeter = 12;
			const lengthInCm = decimeterToCentimeter(lengthInDecimeter);
			expect(lengthInCm).toEqual(120);
		});
	});
});
