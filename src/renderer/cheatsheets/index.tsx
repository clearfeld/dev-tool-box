// import './index.scss';

import { Link } from 'react-router-dom';

function CardLink(props) {
	return (
		<Link to={props.link}>
			<div
				style={{
					backgroundColor: 'var(--color-global-dark-gray-hover)',
					margin: '1rem',
					padding: '0.5rem',
					borderRadius: '0.5rem',
				}}
			>
				<h2>{props.title}</h2>
			</div>
		</Link>
	);
}

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
			<CardLink title="Vim" link="/cheatsheets/vim" />

			{/* <CardLink title="Typescript" link="/cheatsheets/typescript" /> */}
		</div>
	);
}

export default Cheatsheets;
