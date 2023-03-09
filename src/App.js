import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className='container min-h-full min-w-full'>
      {code ? <Dashboard code={code}/> : <Login/>}
    </div>
  );
}

export default App;
