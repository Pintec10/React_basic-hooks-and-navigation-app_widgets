import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({ options, selectedOption, handleSelection, label }) => {

	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if(ref.current && ref.current.contains(event.target)) {
				return;
			}
			setMenuOpen(false);
		};

		document.body.addEventListener('click', onBodyClick);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		}
	}, []);

	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	}

	const renderedOptions = options.filter(option => option.value !== selectedOption.value)
		.map(option => {
			return (
				<div
					key={option.value}
					className="item"
					onClick={() => handleSelection(option)}>
					{option.label}
				</div>
			);
		});
	

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label htmlFor="" className="label">{label}</label>
				<div onClick={handleMenuClick} className={`ui selection dropdown ${menuOpen && 'visible active'}`}>
					<i className="dropdown icon"></i>
					<div className="text">{selectedOption.label}</div>
					<div className={`menu ${menuOpen && 'visible transition'}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};



export default Dropdown;