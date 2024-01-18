import { GroupBlock } from "../commons";
import "../commons.scss";

const PackageManagement = {
	title: "Package management",
	items: [
		{
			title: "Interactively create a package.json file",
			cmd: "npm init",
		},

		{
			title:
				"Install packages based on package.json file in the current folder",
			cmd: "npm install",
		},

		{
			title: "Install everything in package.json, except devDependecies",
			cmd: "npm install --production",
		},

		{
			title: "Search the registry for packages matching the search terms",
			cmd: "npm search term",
		},

		{
			title:
				"Updates all the packages to the latest version, respecting semver",
			cmd: "npm update -g axios",
		},

		{
			title: "Remove package production packages",
			cmd: "npm rm axios",
		},

		{
			title: "Show help for the specific command",
			cmd: "npm help command",
		},

		{
			title: "Search for the package",
			cmd: "npm search axios",
		},
	],
};

const IP = {
	title: "Installing packages",
	items: [
		{
			title: "Alias for npm install",
			cmd: "npm i",
		},

		{
			title: "Install everything in package.json",
			cmd: "npm install",
		},

		{
			title: "Install everything in package.json, except devDependecies",
			cmd: "npm install --production",
		},

		{
			title: "Install the latest version of a package called `axios`",
			cmd: "npm install axios",
		},

		{
			title: "Install specific version of a package",
			cmd: "npm install axios@version",
		},

		{
			title:
				"Install a package `serve` globally , usually for command line use (On *nix requires sudo)",
			cmd: "npm install -g serve",
		},

		{
			title:
				"Install a package and append it in the devDependencies section of your package.json",
			cmd: "npm install --save-dev storybook",
		},
	],
};

const UP = {
	title: "Uninstalling packages",
	items: [
		{
			title: "Uninstall the latest version of a package",
			cmd: "npm uninstall axios",
		},
		{
			title: "Uninstall specific version of a package",
			cmd: "npm uninstall axios@version",
		},
		{
			title: "Uninstall the package globally",
			cmd: "npm uninstall -g axios",
		},
		{
			title:
				"Uninstall the package and append it in the dependencies section of your package.json",
			cmd: "npm uninstall -S axios",
		},
		{
			title:
				"Uninstall the package and append it in the devDependencies section of your package.json",
			cmd: "npm uninstall -D axios",
		},
		{
			title:
				"Uninstall the package and append it in the optionalDependencies section of your package.json",
			cmd: "npm uninstall -O axios",
		},
	],
};

const PD = {
	title: "Package details",
	items: [
		{
			title: "Show the docs for a package in a web browser",
			cmd: "npm docs axios",
		},

		{
			title: "Show the issues for a package in a web browser",
			cmd: "npm bugs axios",
		},

		{
			title: "Open package repository page in the browser",
			cmd: "npm repo axios",
		},

		{
			title:
				"Print all the versions of packages that are installed, as well as their dependencies",
			cmd: "npm ls",
		},
	],
};

function CheatsheetNpm() {
	return (
		<div className="micro-tool-wrap">
			{/* <p>Npm cheatsheet</p> */}

			<div className="cheatsheet__commons__inner-flex">
				<GroupBlock data={PackageManagement} />
				<GroupBlock data={IP} />
				<GroupBlock data={UP} />
				<GroupBlock data={PD} />
			</div>
		</div>
	);
}

export default CheatsheetNpm;
