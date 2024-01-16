import "../commons.scss";

const Exiting = {
	title: "Exiting",
	items: [
		{
			title: "Close File",
			cmd: ":q",
		},

		{
			title: "Close all Files",
			cmd: ":qa",
		},

		{
			title: "Save",
			cmd: ":w",
		},

		{
			title: "Save and Close File",
			cmd: ":wq / :x",
		},

		{
			title: "Save and Quit",
			cmd: "ZZ",
		},

		{
			title: "Quit without checking changes",
			cmd: "ZQ",
		},

		{
			title: "Close all Files",
			cmd: ":qa",
		},
	],
};

const InsertMode = {
	title: "Insert Mode",
	items: [
		{
			title: "Exit insert mode",
			cmd: "Esc / <C - [ >",
		},

		{
			title: "Exit insert mode, and abort current command",
			cmd: "<C - C>",
		},
	],
};

const Clipboard = {
	title: "Clipboard",
	items: [
		{
			title: "Delete Character",
			cmd: "x",
		},
		{
			title: "Delete Line (Cut)",
			cmd: "dd",
		},
		{
			title: "Yank Line (Copy)",
			cmd: "yy",
		},
		{
			title: "Paste",
			cmd: "p",
		},
		{
			title: "Paste before",
			cmd: "P (uppercase)",
		},
		{
			title: "Paste from system clipboard",
			cmd: '"*p / "+p"',
		},
		{
			title: "Paste to system clipboard",
			cmd: '"*y / "+y',
		},
	],
};

const FindReplace = {
	title: "Find and Replace",
	items: [
		{
			title: "Replace foo with bar in whole document",
			cmd: ":%s/foo/bar/g",
		},
	],
};

const Navigation = {
	title: "Navigation",
	items: [
		{
			title: "Arrow Keys",
			cmd: "h j k l",
		},
		{
			title: "Half-page up/down",
			cmd: "<C - U> / <C - D>",
		},
		{
			title: "<C - B> / <C - F>",
			cmd: "Page Up/Down",
		},
	],
};

const NavigationWords = {
	title: "Navigation (words)",
	items: [
		{
			title: "Previous/Next Word",
			cmd: "b / w",
		},
		{
			title: "Previous/Next End of Word",
			cmd: "ge / e",
		},
	],
};

const NavigationLines = {
	title: "Navigation (lines)",
	items: [
		{
			title: "Start of Line",
			cmd: "0 (zero)",
		},
		{
			title: "Start of Line (after whitespace)",
			cmd: "^",
		},
		{
			title: "End of Line",
			cmd: "$",
		},
	],
};

const NavigationCharacter = {
	title: "Navigation (character)",
	items: [
		{
			title: "Go forward to character c",
			cmd: "fc",
		},
		{
			title: "Go forward to character c",
			cmd: "Fc",
		},
	],
};

const NavigationDocument = {
	title: "Navigation (document)",
	items: [
		{
			title: "First Line",
			cmd: "gg",
		},
		{
			title: "Last Line",
			cmd: "G",
		},
		{
			title: "Go to Line {number}",
			cmd: ":{number}",
		},
		{
			title: "Go to Line {number}",
			cmd: "{number}G",
		},
		{
			title: "Go Down {number} lines",
			cmd: "{number}j",
		},
		{
			title: "Go Up {number} lines",
			cmd: "{number}k",
		},
	],
};

const NavigationWindow = {
	title: "Navigation (Window)",
	items: [
		{
			title: "Center this Line",
			cmd: "zz",
		},
		{
			title: "top this Line",
			cmd: "zt",
		},
		{
			title: "Bottom this Line",
			cmd: "zb",
		},
		{
			title: "Move to top of screen",
			cmd: "H",
		},
		{
			title: "Move to middle of screen",
			cmd: "M",
		},
		{
			title: "Move to bottom of screen",
			cmd: "L",
		},
	],
};

const NavigationSearch = {
	title: "Navigation (Search)",
	items: [
		{
			title: "Next matching search pattern",
			cmd: "n",
		},
		{
			title: "Previous Match",
			cmd: "N",
		},
		{
			title: "Next whole word under cursor",
			cmd: "*",
		},
		{
			title: "Previous whole word under cursor",
			cmd: "#",
		},
	],
};

const NavigationTabs = {
	title: "Navigation (Tab pages)",
	items: [
		{
			title: "Edit file in a new tab",
			cmd: ":tabedit [file]",
		},
		{
			title: "Open file if exists in new tab",
			cmd: ":tabfind [file]",
		},
		{
			title: "Close Current Tab",
			cmd: ":tabclose",
		},
		{
			title: "List all Tabs",
			cmd: ":tabs",
		},
		{
			title: "Go to First Tab",
			cmd: ":tabfirst",
		},
		{
			title: "Go to Last Tab",
			cmd: ":tablast",
		},
		{
			title: "Go to Next Tab",
			cmd: ":tabn",
		},
		{
			title: "Go to Previous Tab",
			cmd: ":tabp",
		},
	],
};

const Editing = {
	title: "Editing",
	items: [
		{
			title: "Append",
			cmd: "a",
		},
		{
			title: "Append from end of line",
			cmd: "A",
		},
		{
			title: "Insert",
			cmd: "i",
		},
		{
			title: "Next Line",
			cmd: "o",
		},
		{
			title: "Previous Line",
			cmd: "O",
		},
		{
			title: "Delete char and insert",
			cmd: "s",
		},
		{
			title: "Delete line and insert",
			cmd: "S",
		},
		{
			title: "Delete until end of line and insert",
			cmd: "C",
		},
		{
			title: "Replace one character",
			cmd: "r",
		},
		{
			title: "Enter Replace Mode",
			cmd: "R",
		},
		{
			title: "Undo Changes",
			cmd: "u",
		},
		{
			title: "Redo Changes",
			cmd: "<C - R>",
		},
	],
};

const VisualMode = {
	title: "Visual Mode",
	items: [
		{
			title: "Enter Visual Mode",
			cmd: "v",
		},
		{
			title: "Enter Visual line Mode",
			cmd: "V",
		},
		{
			title: "Enter visual mode",
			cmd: "<C - V>",
		},
		{
			title: "Delete selection (in visual mode)",
			cmd: "d / x",
		},
		{
			title: "Replace selection (in visual mode)",
			cmd: "s",
		},
		{
			title: "Yank selection (in visual mode)",
			cmd: "y",
		},
	],
};

function GroupBlock(props: any) {
	return (
		<div>
			<h3>{props.data.title}</h3>

			<div className="cheatsheet__commons__group-block">
				{props.data.items.map((item, idx) => {
					return <HelpLine key={idx} line_obj={item} />;
				})}
			</div>
		</div>
	);
}

function HelpLine(props: any) {
	return (
		<div>
			<h4 className="cheatsheet__commons__help-line__title">
				{props.line_obj.title}
			</h4>

			<div className="cheatsheet__commons__help-line__cmd">
				{props.line_obj.cmd}
			</div>
		</div>
	);
}

function CheatsheetVim() {
	return (
		<div
			style={{
				position: "absolute",
				marginLeft: "var(--sidebar-size)",
				marginTop: "4rem",
				top: "0",
				left: "0",
				padding: "1rem",
				display: "flex",
				flexWrap: "wrap",
				gap: "2rem",
			}}
		>
			{/* <p>Npm cheatsheet</p> */}

			<GroupBlock data={Exiting} />
			<GroupBlock data={InsertMode} />
			<GroupBlock data={Clipboard} />
			<GroupBlock data={FindReplace} />
			<GroupBlock data={Navigation} />
			<GroupBlock data={NavigationWords} />
			<GroupBlock data={NavigationLines} />
			<GroupBlock data={NavigationCharacter} />
			<GroupBlock data={NavigationDocument} />
			<GroupBlock data={NavigationWindow} />
			<GroupBlock data={NavigationSearch} />
			<GroupBlock data={NavigationTabs} />
			<GroupBlock data={Editing} />
			<GroupBlock data={VisualMode} />
		</div>
	);
}

export default CheatsheetVim;
