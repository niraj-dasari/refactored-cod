import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

const Home = () => {
  return <h1>Welcome to the Home page</h1>;
};

const About = () => {
  return <h1>About Us</h1>;
};

const Contact = () => {
  return <h1>Contact Us</h1>;
};


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );

}

export default App;
