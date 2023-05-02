import { useCallback } from 'react';
import * as yup from 'yup';

interface ValidationErrors {
	[key: string]: {
		type: string;
		message: string;
	};
}

interface ValidationResult {
	values: any;
	errors: ValidationErrors;
}

type YupSchema = yup.ObjectSchema<yup.Shape<any, Record<string, any>>>;

export const useYupValidationResolver = (
	validationSchema: YupSchema
): ((data: any) => Promise<ValidationResult>) =>
	useCallback(
		async (data) => {
			try {
				const values = await validationSchema.validate(data, {
					abortEarly: false,
				});

				return {
					values,
					errors: {},
				};
			} catch (errors) {
				return {
					values: {},
					errors: errors.inner.reduce(
						(
							allErrors: ValidationErrors,
							currentError: yup.ValidationError
						) => ({
							...allErrors,
							[currentError.path as string]: {
								type: currentError.type ?? 'validation',
								message: currentError.message,
							},
						}),
						{}
					),
				};
			}
		},
		[validationSchema]
	);
