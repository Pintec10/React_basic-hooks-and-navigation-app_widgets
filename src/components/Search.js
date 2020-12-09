import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';


const Search = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const fetchResults = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term
				}
			});
			setResults(data.query.search);
		};

		const timeoutId = setTimeout(() => {
			if (term) {
				fetchResults();
			}
		}, 700);

		return(() => {
			clearTimeout(timeoutId);
		});
		
	}, [term]);

	const renderedResults = results.map(oneResult => {
		const sanitizedString = stringText => {
			return stringText.replace(/<\/?script/gi, "[HTML script tag]");
		}
		return (
			<div className="item" key={oneResult.pageid}>
				<div className="right floated content">
					<a href={`https://en.wikipedia.org?curid=${oneResult.pageid}`}
					className="ui button">Go</a>
				</div>
				<div className="content">
					<div className="header">
						{oneResult.title}
					</div>
					<span dangerouslySetInnerHTML={{__html: sanitizedString(oneResult.snippet)}}></span>
				</div>
			</div>
		);
	})

	const handleTermChange = e => {
		setTerm(e.target.value);
	}

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter search term here:</label>
					<input className="input"
						value={term}
						onChange={handleTermChange} />
				</div>
			</div>
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	)
};


export default Search;