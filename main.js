import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

function Top() {
  const history = useHistory();
  const onClickHome = e => {
    e.preventDefault();
    history.push('/home');
  };
  const onClickHello = e => {
    e.preventDefault();
    history.push('/hello');
  };
  return (
    <>
      <h1>Advent Calendar Sample</h1>
      <a href="/home" onClick={onClickHome}>
        home
      </a>
      <a href="/hello" onClick={onClickHello}>
        hello
      </a>
    </>
  );
}

function Home() {
  const history = useHistory();
  const onClick = e => {
    e.preventDefault();
    history.push('/hello');
  };
  return (
    <>
      <h1>Home</h1>
      <a href="/hello" onClick={onClick}>
        hello
      </a>
    </>
  );
}

function Hello() {
  const history = useHistory();
  const onClick = e => {
    e.preventDefault();
    history.push('/home');
  };
  return (
    <>
      <h1>Hello</h1>
      <a href="/home" onClick={onClick}>
        hello
      </a>
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Top />
        </Route>
        <Route path="/hello" exact>
          <Hello />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
