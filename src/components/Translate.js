import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';




const options = [
	{
		label: 'Afrikaans',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Finnish',
		value: 'fi'
	},
	{
		label: 'Icelandic',
		value: 'is'
	},
	{
		label: 'Italian',
		value: 'it'
	},
	{
		label: 'Spanish',
		value: 'es'
	},
];

const dropdownLabel = 'Please choose a language.'


const Translate = () => {

	const [selectedLanguage, setSelectedLanguage] = useState(options[0]);

	const [inputText, setInputText] = useState('');

	const handleTextChange = event => {
		setInputText(event.target.value);
	}

	return(
		<div>
			<div className="ui form">
				<div className="field">
				<label className="label">Please enter the text you want to translate</label>
				<input type="text" value={inputText} onChange={handleTextChange}></input>
				</div>
			</div>
			<Dropdown options={options} 
			selectedOption={selectedLanguage} 
			handleSelection={setSelectedLanguage}
			label={dropdownLabel}/>
			<br />
			<hr />
			<br />
			<Convert language={selectedLanguage} text={inputText}/>
			
		</div>
	);
};



export default Translate;