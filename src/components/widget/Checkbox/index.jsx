import React from 'react';
import './index.css';

const Checkbox = ({ label, checked, ...props }) => {
	const defaultState = checked ? checked : false;
	const [isChecked, setIsChecked] = React.useState(defaultState);
	const toggleCheck = (e) => {
		setIsChecked(() => !isChecked);
	};
	return (
		<div className='checkbox-wrapper'>
			<label>
				<input
					type='checkbox'
					checked={isChecked}
					onChange={toggleCheck}
					className={checked ? 'checked' : ''}
					{...props}
				/>
				<span>{label}</span>
			</label>
		</div>
	);
};

export default Checkbox;
