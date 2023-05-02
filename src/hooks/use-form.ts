import { yupResolver } from '@hookform/resolvers/yup';
import {
	FieldValues,
	UseFormProps,
	useForm as useFormRHF,
} from 'react-hook-form';
import { Validation } from '../common/protocols';

type UseFormParams = UseFormProps & {
	validationSchema?: Validation;
	mode: 'all' | 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched';
};

export const useForm = <T extends FieldValues>({
	validationSchema,
	mode,
	...props
}: UseFormParams) => {
	// const resolver = useValidationResolver(
	// 	validationSchema
	// ) as unknown as Resolver<T, object>;

	// const resolver = useValidationResolver(validationSchema);

	const values = useFormRHF<T>({
		resolver: yupResolver(validationSchema),
		mode,
		...props,
	});

	return values;
};
