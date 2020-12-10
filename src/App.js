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
		value: 'green'
	},
	{
		label: 'A blue hue',
		value: 'blue'
	},
	{
		label: 'Color red',
		value: 'red'
	}
];

const dropdownLabel = 'Select a color'


const App = () => {

	const [selectedOption, setSelectedOption] = useState(options[0]);
	return (
		<div className="ui container">
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
				<h3 style={{ color: selectedOption.value }}>{faker.lorem.sentences()}</h3>
			</Route>
			<Route path='/translate'>
				<Translate />
			</Route>
		</div>
	);
}


export default App;