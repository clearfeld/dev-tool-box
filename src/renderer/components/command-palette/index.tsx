import { useEffect } from 'react';
import './index.scss';

interface I_GlobalSearch {
	setShowCmdPalette: (arg: boolean) => void;
}

function GlobalSearch(props: I_GlobalSearch) {
	useEffect(() => {
		document.addEventListener('keydown', onKeyPress, false);

		return () => {
			document.removeEventListener('keydown', onKeyPress, false);
		};
	}, []);

	function onKeyPress(event: any) {
		// console.log(`key pressed: ${event.key}`);
		// console.log(`key pressed: ${event.keyCode}`);

		if (event.keyCode === 27) {
			// Esc
			props.setShowCmdPalette(false);
		}
	}

	return (
		<>
			<div className="global-search__wrapper">
				<div className="global-search__search__wrapper">
					<input type="text" />
				</div>
			</div>

			<div className="global-search__backdrop" />
		</>
	);
}

export default GlobalSearch;
