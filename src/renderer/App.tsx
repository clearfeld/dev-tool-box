import {
	MemoryRouter as Router,
	createHashRouter,
	Routes,
	Route,
	Link,
	RouterProvider,
	Outlet,
	createRoutesFromElements,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import StringCaseConverter from './tools/strings/string-case-converter';
import JwtDecoder from './tools/jwt/decoder';
import Cheatsheets from './cheatsheets';
import CheatsheetTypescript from './cheatsheets/typescript';
import CheatsheetNpm from './cheatsheets/npm';
import { useEffect, useState } from 'react';
import GlobalSearch from './components/command-palette';
import SnippetsTypescript from './snippets/typescript';
import Snippets from './snippets';

1;

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

function Hello() {
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
			<CardLink
				title="String Case Converter"
				link="/tool/string/stringcase"
			/>

			<svg viewBox="0 0 24 24">
				<g
					strokeLinejoin="round"
					strokeLinecap="round"
					stroke="currentColor"
					fill="none"
					style={{
						strokeWidth: 'var(--tabler-stroke-width)',
					}}
				>
					<path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
					<path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
					<path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
					<path d="M6 9l12 0" />
					<path d="M6 12l3 0" />
					<path d="M6 15l2 0" />
				</g>
			</svg>

			<CardLink title="Jwt Decoder" link="/tool/jwt/decoder" />
		</div>
	);
}

export default function App() {
	const [showCmdPalette, setShowCmdPalette] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener('keydown', onKeyPress, false);

		return () => {
			document.removeEventListener('keydown', onKeyPress, false);
		};
	}, []);

	function onKeyPress(event: any) {
		// console.log(`key pressed: ${event.key}`);
		// console.log(`key pressed: ${event.keyCode}`);

		if (event.ctrlKey && event.shiftKey && event.keyCode === 80) {
			// CTRL+SHIFT+P
			// alert('Control Shift P');
			setShowCmdPalette(true);
		}
	}

	const router = createHashRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={
					<>
						<Navbar />

						<Sidebar />

						<Outlet />
					</>
				}
			>
				{/* <Route path="login" element={<Login />} /> */}

				<Route path="/" element={<Hello />} />
				<Route
					path="/tool/string/stringcase"
					element={<StringCaseConverter />}
				/>

				<Route path="/tool/jwt/decoder" element={<JwtDecoder />} />

				<Route path="/snippets" element={<Snippets />} />
				<Route
					path="/snippets/typescript"
					element={<SnippetsTypescript />}
				/>

				<Route path="/cheatsheets" element={<Cheatsheets />} />
				<Route
					path="/cheatsheets/typescript"
					element={<CheatsheetTypescript />}
				/>
				<Route path="/cheatsheets/npm" element={<CheatsheetNpm />} />
			</Route>,
		),
	);

	return (
		<div>
			{showCmdPalette && (
				<GlobalSearch setShowCmdPalette={setShowCmdPalette} />
			)}

			<RouterProvider router={router} />
		</div>
	);
}
