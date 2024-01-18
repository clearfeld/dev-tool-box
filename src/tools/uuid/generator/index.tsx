/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useReducer, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { v1, v4, v5 } from "uuid";

import Navbar from "../../../components/navbar";
import Sidebar from "../../../components/sidebar";

// import './index.scss';

// TODO: v3, v5
// TODO: when support rolls out v6 v7 v8

function UuidGenerator() {
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	return (
		<div className="micro-tool-wrap">
			<h1 className="jwt__decoder__title">Uuid Generator</h1>

			<div className="jwt__decoder__inner-wrap">
				<div className="jwt__decoder__right-wrap">
					<div>
						<p>Uuid v1 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={v1()}
							disabled
						/>
					</div>

					<div>
						<p>Uuid v4 Hash</p>
						<textarea
							className="jwt__decoder__textarea"
							name=""
							id=""
							value={v4()}
							disabled
						/>
					</div>

					<button onClick={forceUpdate}>Generate New Uuids</button>
				</div>
			</div>
		</div>
	);
}

export default UuidGenerator;
