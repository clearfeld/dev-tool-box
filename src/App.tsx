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

import Navbar from "@src/components/navbar";
// import Sidebar from "./components/sidebar";

import StringCaseConverter from "@src/tools/strings/string-case-converter";
import JwtDecoder from "@src/tools/jwt/decoder";

import Cheatsheets from "@src/cheatsheets";
import CheatsheetTypescript from "@src/cheatsheets/typescript";
import CheatsheetNpm from "@src/cheatsheets/npm";
import CheatsheetVim from "@src/cheatsheets/vim";

import GlobalSearch from "@src/components/command-palette";

import SnippetsTypescript from "@src/snippets/typescript";
import Snippets from "@src/snippets";

// import CardLink from "./components/commons/card-block";

import HashGenerator from "@src/tools/hash/generator";
import UuidGenerator from "@src/tools/uuid/generator";
import Tools from "@src/tools";
import KeycodeInfo from "@src/tools/keycode-info";
import UrlParser from "@src/tools/url/parser";
import UrlEncoderDecoder from "@src/tools/url/encode-decode";
import CSSCursors from "@src/tools/css/cursors";

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

				<Route path="/tool/url/parser" element={<UrlParser />} />

				<Route path="/tool/url/encode-decode" element={<UrlEncoderDecoder />} />

				<Route path="/tool/css/cursors" element={<CSSCursors />} />
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
