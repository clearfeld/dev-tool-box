// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";

// import "./App.css";

// import {
// 	MemoryRouter as Router,
// 	createHashRouter,
// 	Routes,
// 	Route,
// 	Link,
// 	RouterProvider,
// 	Outlet,
// 	createRoutesFromElements,
// } from "react-router-dom";

import CardLink from "../components/commons/card-block";

import jwtLogo from "../assets/svgs/jwt.svg";
import hashLogo from "../assets/svgs/hash.svg";
// import textLogo from "../assets/svgs/text-convert.svg";
import uuidIcon from "../assets/uuid.png";

import "./index.scss";

function Tools() {
	return (
		<div className="selector-wrap">
			{/* <CardLink
				title="String Case Converter"
				link="/tool/string/stringcase"
				description="Converts string into different case(s)"
				Icon={
					<img
						src={textLogo}
						className="svg-filter"
						style={{
							// filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
			/> */}

			<CardLink
				title="Hash Generator"
				link="/tool/hash/generator"
				description="Convert string into various hashs"
				Icon={
					<img
						src={hashLogo}
						className="svg-filter"
						style={{
							// filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
			/>

			<CardLink
				title="Uuid Generator"
				link="/tool/uuid/generator"
				description="Generate uuids (v1 and v4)"
				Icon={
					<img
						src={uuidIcon}
						className="svg-filter"
						style={{
							// filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
			/>

			<CardLink
				title="Jwt Decoder"
				link="/tool/jwt/decoder"
				description="Decodes Json Web Tokens (header and payload)"
				Icon={
					<img
						src={jwtLogo}
						className="svg-filter"
						style={{
							// filter: "grayscale(1)",
							width: "2rem",
							height: "2rem",
						}}
					/>
				}
			/>

			<CardLink
				title="Keycode Info"
				link="/tool/keycode-info"
				description="Get details for pressed key"
				// Icon={
				// 	<img
				// 		src={hashLogo}
				// 		className="svg-filter"
				// 		style={{
				// 			// filter: "grayscale(1)",
				// 			width: "2rem",
				// 			height: "2rem",
				// 		}}
				// 	/>
				// }
			/>

			<CardLink
				title="Url Parser"
				link="/tool/url/parser"
				description="Parses URLs into a tree view."
				//Icon={
				//	<img
				//		src={jwtLogo}
				//		className="svg-filter"
				//		style={{
				//			// filter: "grayscale(1)",
				//			width: "2rem",
				//			height: "2rem",
				//		}}
				//	/>
				//}
			/>
		</div>
	);
}

export default Tools;
