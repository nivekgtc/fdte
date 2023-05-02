import Select from 'react-select';

export default () => (
	<Select
		closeMenuOnSelect={false}
		defaultValue={[colourOptions[0], colourOptions[1]]}
		isMulti
		options={colourOptions}
		styles={colourStyles}
	/>
);
('');
