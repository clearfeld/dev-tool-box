// import './index.scss';

import { Link } from 'react-router-dom';
import CardLink from '../components/commons/card-block';

function Snippets() {
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
			<CardLink title="Typescript" link="/snippets/typescript" />

			{/* <CardLink title="Typescript" link="/cheatsheets/typescript" /> */}
		</div>
	);
}

export default Snippets;
