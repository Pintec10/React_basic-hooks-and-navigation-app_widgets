import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TRANSLATE_API_KEY, TRANSLATE_BASE_URL } from '../config';
// Note: config.js file is not uploaded to GitHub



const Convert = ({ language, text }) => {

	// the stored debounced input text is changed 500ms after the actual input changed, to avoid excessive API calls
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);

		return () => { clearTimeout(timeoutId) };
	}, [text]);


	// API call is made when stored debounced input text changes - NOTE: The google translate API key is the config.js file, which is not uploaded to GitHub.
	const [translation, setTranslation] = useState('');

	useEffect(() => { 
		const doTranslation = async () => {
			const { data } = await axios.post(TRANSLATE_BASE_URL, {}, {
				params: {
					q: debouncedText,
					target: language.value,
					key: TRANSLATE_API_KEY
				}
			});

			setTranslation(data.data.translations[0].translatedText);			
		};

		doTranslation();
		
	}, [language, debouncedText]);


	return(
		<div>
			<h3 className="ui header">Translation</h3>
			<p>{translation}</p>
		</div>
	);
};



export default Convert;