import Select from 'react-select';

import { Fragment } from 'react';
import { Control, Controller } from 'react-hook-form';
import { useTheme } from 'styled-components';
import * as S from './styled';

type Props = {
	isMulti?: boolean;
	name: string;
	options: {
		value: string;
		label: string;
	}[];
	control?: Control<any>;
};

const customStyles = {
	control: (provided) => ({
		...provided,
		border: '2px solid black',
		borderRadius: '8px',
	}),
};

const DropdownSelect = ({ options, control, name, ...props }: Props) => {
	const {
		palette: {
			action: { dark },
		},
	} = useTheme();

	return (
		<Fragment>
			{control ? (
				<Controller
					name={name}
					control={control}
					// defaultValue=
					render={({ field, fieldState: { error, invalid } }) => {
						const errorMessage = error?.message || '';

						return (
							<S.DropdownWrapper>
								<Select
									options={options}
									{...props}
									closeMenuOnSelect={!props.isMulti}
									onChange={field.onChange}
									value={field.value}
									// error={Boolean(error?.message)}
									styles={{
										control: (provided) => ({
											...provided,
											...(errorMessage
												? { borderColor: dark, borderWidth: '2px' }
												: {}),
										}),
									}}
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
};
export default DropdownSelect;
