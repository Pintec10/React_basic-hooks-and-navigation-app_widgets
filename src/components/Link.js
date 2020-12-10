import React, { useState, useEffect } from 'react';



const Link = ({ className, href, children }) => {

	// determines if link is currently active
	const isActive = () => {
		return href === window.location.pathname;
	};

	// boolean state tracking if link is currently active
	const [activeState, setActiveState] = useState(isActive());

	// adds event listener to update state and rerender when url changes
	useEffect(() => {
		const onLocationChange = () => {
			setActiveState(isActive());
		};

		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};

	}, []);

	// emits the 'popstate' event when clicked. This event tells other components that url changed
	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}

		event.preventDefault();
		window.history.pushState({}, '', href);

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	// adds the 'active' css class if link is currently active
	const getClassName = () => {
		return `${className} ${activeState && 'active'}`;
	};

	return (
		<a className={getClassName()} 
		href={href}
		onClick={onClick}>
			{children}
		</a>
	);
};



export default Link;