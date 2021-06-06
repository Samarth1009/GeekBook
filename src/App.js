// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar/navbar.js";
// import Login from "./Login/login.js";
import Profile from './Profile/profile.js'
import Home from './Home/Home'

function App() {
  return (
    <div className='app'>
      {/* <Login /> */}
      <Navbar />
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
