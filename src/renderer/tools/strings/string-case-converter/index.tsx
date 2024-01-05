import Navbar from '../../../components/navbar';
import Sidebar from '../../../components/sidebar';

// import './App.css';

function StringCaseConverter() {
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
        String Case
      </div>
    </div>
  );
}

export default StringCaseConverter;
