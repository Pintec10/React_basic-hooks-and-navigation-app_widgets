import React, { useState } from 'react';
import faker from 'faker';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
	{
		title: faker.vehicle.vehicle(),
		content: faker.lorem.sentences()
	},
	{
		title: faker.vehicle.vehicle(),
		content: faker.lorem.sentences()
	},
	{
		title: faker.vehicle.vehicle(),
		content: faker.lorem.sentences()
	},
	{
		title: faker.vehicle.vehicle(),
		content: faker.lorem.sentences()
	}
];

const options = [
	{
		label: 'Some green',
		value: 'darkgreen'
	},
	{
		label: 'A blue hue',
		value: 'steelblue'
	},
	{
		label: 'Color red',
		value: 'firebrick'
	}
];

const dropdownLabel = 'Select a color'


const App = () => {

	const [selectedOption, setSelectedOption] = useState(options[0]);
	return (
		<div className="ui container">
			<h1 className ="ui header">Widgets Showcase</h1>
			<p>This is a simple React app which uses React hooks in a few different reusable components. These include an Accordion list, a Wikipedia search, a reusable dropdown menu, and a Translator widget.</p>
			<p>Navigation is managed through a 'hand-made' router component, rather than a ready-made library.</p>
			
			<div className="ui hidden divider"></div>
			<Header />
			
			<Route path='/'>
				<Accordion items={items} />
			</Route>
			<Route path='/search'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				<Dropdown
					options={options}
					selectedOption={selectedOption}
					handleSelection={setSelectedOption}
					label={dropdownLabel} />
					<div className="ui card">
						<div className="content" style={{ color: selectedOption.value }}>
						{faker.lorem.sentences()}
						</div>
					</div>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
}


export default App;