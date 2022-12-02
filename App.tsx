import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link> <Link to="route1">Route 1</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="route1" element={<Route1 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Route1() {
  return <h1>"In Route 1"</h1>;
}

function Home() {
  return (
    <React.Fragment>
      <h1>"In Home"</h1>
      <Outlet />
    </React.Fragment>
  );
}
