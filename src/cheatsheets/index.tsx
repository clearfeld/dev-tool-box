// import './index.scss';

import { Link } from 'react-router-dom';
import CardLink from '../components/commons/card-block';

function Cheatsheets() {
	return (
		<div
			style={{
				position: 'absolute',
				marginLeft: 'var(--sidebar-size)',
				marginTop: '4rem',
				top: '0',
				left: '0',
			}}
		>
			<CardLink title="NPM" link="/cheatsheets/npm" />

			{/* <CardLink title="Typescript" link="/cheatsheets/typescript" /> */}
		</div>
	);
}

export default Cheatsheets;
