// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import icon from '../../../../assets/icon.svg';
import './Navbar.css';

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/">
				<img width="32" alt="icon" src={icon} />
			</Link>

			<div>
				<Link to="/snippets">Snippets</Link>
			</div>

			<div>
				<Link to="/cheatsheets">Cheat Sheets</Link>
			</div>

			{/* <div>
        <input type="text" />
      </div>



      <div>
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
      </div> */}
		</div>
	);
}

export default Navbar;
