import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message'
import Profile from './components/Profile'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello>
      <Message></Message> */}
        <Counter></Counter>
{/* attributes passed to components are called props */}
      {/* <Profile name = "John" lastname = "Wilkins">
        <h1>John is the child of Pat and George.</h1>
      </Profile>
      <Profile name = "Pat" lastname = "Wilkins"></Profile>
      <Profile name = "George" lastname = "Wilkins"></Profile>
      <Message secretCode= "The secret code is 2024!"></Message> */}
    </div>
  );
}

export default App;
