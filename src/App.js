import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className='container'>
      {/* {code ? <Dashboard code={code}/> : <Login/>} */}
      <Dashboard />
    </div>
  );
}

export default App;
