import { useEffect, useState } from 'react';

import './App.css';

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

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import StringCaseConverter from './tools/strings/string-case-converter';
import JwtDecoder from './tools/jwt/decoder';

import Cheatsheets from './cheatsheets';
import CheatsheetTypescript from './cheatsheets/typescript';
import CheatsheetNpm from './cheatsheets/npm';

import GlobalSearch from './components/command-palette';

import SnippetsTypescript from './snippets/typescript';
import Snippets from './snippets';

import CardLink from './components/commons/card-block';

import { ReactComponent as JWTSVG } from '../../assets/svgs/jwt.svg';
import HashGenerator from './tools/hash/generator';

function Hello() {
	return (
		<div
			style={{
				position: 'absolute',
				marginLeft: 'var(--sidebar-size)',
				marginTop: '4rem',
				top: '0',
				left: '0',
				display: 'flex',
			}}
		>
			<CardLink
				title="String Case Converter"
				link="/tool/string/stringcase"
				description="test"
			/>

			<CardLink title="Hash Generator" link="/tool/hash/generator" />

			<CardLink
				title="Jwt Decoder"
				link="/tool/jwt/decoder"
				Icon={<JWTSVG width="2.5rem" height="2.5rem" />}
			/>
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

				<Route
					path="/tool/hash/generator"
					element={<HashGenerator />}
				/>

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
