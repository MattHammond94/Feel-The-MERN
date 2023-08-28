import SignIn from './components/auth/SignIn'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>This is our new homepage!</h1>
      <div>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
      <div>
        <Link to={'/login'}>Log In</Link>
      </div>
    </div>
  );
}

export default App;
