import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Message></Message>
      <Profile name = "John"></Profile>
      <Profile name = "Stanley"></Profile>
      <Profile name = "Wilkins"></Profile>
    </div>
  );
}

export default App;
