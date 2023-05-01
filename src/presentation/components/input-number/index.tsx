import chevron from 'assets/images/chevronDownBlack.png';

import { Fragment } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import * as S from './styled';

type Props = {
	className?: string;
	label?: string;
	placeholder?: string;
	name: string;
	suffix?: string;
	control?: Control<FieldValues | any>;
};

const InputNumber = ({
	className,
	label,
	placeholder,
	name,
	suffix,
	control,
}: Props) => (
	<Fragment>
		{control ? (
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error, invalid } }) => {
					const errorMessage = error?.message || '';

					const increase = () => field.onChange(Number(field.value) + 1 || 0);
					const decrease = () => field.onChange(Number(field.value) - 1 || 0);

					return (
						<S.InputNumberWrapper className={className}>
							{label && <S.Label>{label}</S.Label>}

							<S.InputContent>
								<S.Input
									value={field.value}
									onChange={field.onChange}
									type="number"
									placeholder={placeholder}
									name={name}
								/>

								{suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

								<S.InputActions>
									<S.Arrow
										src={chevron}
										className="increase"
										alt="Mais"
										onClick={increase}
									/>
									<S.Arrow
										src={chevron}
										className="decrease"
										alt="Menos"
										onClick={decrease}
									/>
								</S.InputActions>
							</S.InputContent>
							<S.Error>{errorMessage}</S.Error>
						</S.InputNumberWrapper>
					);
				}}
			/>
		) : (
			<S.InputNumberWrapper className={className}>
				{label && <S.Label>{label}</S.Label>}

				<S.InputContent>
					<S.Input
						value=""
						type="number"
						placeholder={placeholder}
						name={name}
					/>

					{suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

					<S.InputActions>
						<S.Arrow src={chevron} className="increase" alt="Mais" />
						<S.Arrow src={chevron} className="decrease" alt="Menos" />
					</S.InputActions>
				</S.InputContent>
			</S.InputNumberWrapper>
		)}
	</Fragment>
);

export default InputNumber;
