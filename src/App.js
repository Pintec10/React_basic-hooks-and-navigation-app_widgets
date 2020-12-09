import React, { useState } from 'react';
import faker from 'faker';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


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
		<div>
			{/* <Accordion items={items}/> */}
			{/* <Search /> */}
			{/* <Dropdown
				options={options}
				selectedOption={selectedOption}
				handleSelection={setSelectedOption}
				label={dropdownLabel} />
			<h3 style={{color: selectedOption.value}}>{faker.lorem.sentences()}</h3> */}
			<Translate />
		</div>
	);
}


export default App;