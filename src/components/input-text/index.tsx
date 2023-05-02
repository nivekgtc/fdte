import { Fragment } from 'react';
import { Control, Controller } from 'react-hook-form';
import * as S from './styled';

type InputProps = {
	className?: string;
	label?: string;
	type?: string;
	placeholder?: string;
	name?: string;
};

type Props = InputProps & {
	name: string;
	control?: Control<any>;
};

const InputText = ({
	className,
	label,
	type,
	placeholder,
	name,
	control,
	...inputProps
}: Props) => (
	<Fragment>
		{control ? (
			<Controller
				name={name}
				control={control}
				defaultValue=""
				render={({ field, fieldState: { error, invalid } }) => {
					const errorMessage = error?.message || '';

					return (
						<S.InputTextWrapper className={className} {...inputProps}>
							{label && <S.Label>{label}</S.Label>}

							<S.Input
								type={type}
								placeholder={placeholder}
								name={name}
								error={Boolean(error?.message)}
								value={field.value}
								onChange={field.onChange}
							/>
							{error && <S.Error>{errorMessage}</S.Error>}
						</S.InputTextWrapper>
					);
				}}
			/>
		) : (
			<S.InputTextWrapper className={className}>
				{label && <S.Label>{label}</S.Label>}

				<S.Input type={type} placeholder={placeholder} name={name} />
				{}
			</S.InputTextWrapper>
		)}
	</Fragment>
);

export default InputText;
