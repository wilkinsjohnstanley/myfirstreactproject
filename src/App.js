import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello>
      <Message></Message> */}

{/* attributes passed to components are called props */}
      <Profile name = "John" lastname = "Wilkins"></Profile>
      <Profile name = "Pat" lastname = "Wilkins"></Profile>
      <Profile name = "George" lastname = "Wilkins"></Profile>
    </div>
  );
}

export default App;
