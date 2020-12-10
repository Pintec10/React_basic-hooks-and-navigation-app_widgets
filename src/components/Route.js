import { useState, useEffect } from 'react';


const Route = ({ path, children }) => {

	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	// adds event listener to update state and rerender when url changes
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', onLocationChange);

		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);

	return currentPath === path ? children : null;
};



export default Route;