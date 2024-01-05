import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import StringCaseConverter from './tools/strings/string-case-converter';

function CardLink(props) {
  return (
    <Link to="/tool/string/stringcase">
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
    <div>
      <Navbar />

      <Sidebar />

      <div
        style={{
          position: 'absolute',
          marginLeft: 'var(--sidebar-size)',
          marginTop: '4rem',
          top: '0',
          left: '0',
        }}
      >
        <CardLink title="String Case Converter" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/tool/string/stringcase" element={<StringCaseConverter />} />
        </Routes>
      </Router>
    </div>
  );
}
