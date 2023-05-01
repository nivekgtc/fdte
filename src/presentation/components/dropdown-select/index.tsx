import Select from 'react-select';

import { Fragment } from 'react';
import { Control, Controller } from 'react-hook-form';
import * as S from './styled';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

type Props = {
	isMulti?: boolean;
	name: string;
	options: {
		value: string;
		label: string;
	}[];
	control?: Control<any>;
};

const DropdownSelect = ({ options, control, name, ...props }: Props) => (
	<Fragment>
		{control ? (
			<Controller
				name={name}
				control={control}
				// defaultValue=
				render={({ field, fieldState: { error, invalid } }) => {
					// const errorState = error as unknown as ValidationErrorType;
					console.log({ error });
					const errorMessage = error?.message || '';
					// const errorOption = errorState?.option;

					return (
						<S.DropdownWrapper>
							<Select
								options={options}
								{...props}
								closeMenuOnSelect={!props.isMulti}
								onChange={field.onChange}
								value={field.value}
							/>
							{error && <S.Error>{errorMessage}</S.Error>}
						</S.DropdownWrapper>
					);
				}}
			/>
		) : (
			<S.DropdownWrapper>
				<Select
					options={options}
					{...props}
					closeMenuOnSelect={!props.isMulti}
				/>
			</S.DropdownWrapper>
		)}
	</Fragment>
);
export default DropdownSelect;
