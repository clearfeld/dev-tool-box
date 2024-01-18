import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";

import "./App.css";

import {
	createHashRouter,
	Route,
	RouterProvider,
	Outlet,
	createRoutesFromElements,
} from "react-router-dom";

import Navbar from "./components/navbar";
// import Sidebar from "./components/sidebar";

import StringCaseConverter from "./tools/strings/string-case-converter";
import JwtDecoder from "./tools/jwt/decoder";

import Cheatsheets from "./cheatsheets";
import CheatsheetTypescript from "./cheatsheets/typescript";
import CheatsheetNpm from "./cheatsheets/npm";
import CheatsheetVim from "./cheatsheets/vim";

import GlobalSearch from "./components/command-palette";

import SnippetsTypescript from "./snippets/typescript";
import Snippets from "./snippets";

// import CardLink from "./components/commons/card-block";

import HashGenerator from "./tools/hash/generator";
import UuidGenerator from "./tools/uuid/generator";
import Tools from "./tools";
import KeycodeInfo from "./tools/keycode-info";

export default function App() {
	const [showCmdPalette, setShowCmdPalette] = useState<boolean>(false);

	useEffect(() => {
		document.addEventListener("keydown", onKeyPress, false);

		return () => {
			document.removeEventListener("keydown", onKeyPress, false);
		};
	}, []);

	// async function greet() {
	//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	//   setGreetMsg(await invoke("greet", { name }));
	// }

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

						{/* <Sidebar /> */}

						<Outlet />
					</>
				}
			>
				{/* <Route path="login" element={<Login />} /> */}

				<Route path="/" element={<Tools />} />
				<Route
					path="/tool/string/stringcase"
					element={<StringCaseConverter />}
				/>

				<Route path="/tool/jwt/decoder" element={<JwtDecoder />} />

				<Route path="/tool/hash/generator" element={<HashGenerator />} />

				<Route path="/tool/uuid/generator" element={<UuidGenerator />} />

				<Route path="/tool/keycode-info" element={<KeycodeInfo />} />

				<Route path="/snippets" element={<Snippets />} />
				<Route path="/snippets/typescript" element={<SnippetsTypescript />} />

				<Route path="/cheatsheets" element={<Cheatsheets />} />
				<Route
					path="/cheatsheets/typescript"
					element={<CheatsheetTypescript />}
				/>
				<Route path="/cheatsheets/vim" element={<CheatsheetVim />} />

				<Route path="/cheatsheets/npm" element={<CheatsheetNpm />} />
			</Route>,
		),
	);

	return (
		<div>
			{showCmdPalette && <GlobalSearch setShowCmdPalette={setShowCmdPalette} />}

			<RouterProvider router={router} />
		</div>
	);
}
