import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Finish from './pages/Finish';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 30px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
`

function App() {

  const dispatch = useDispatch();

  /** Fetch data */
  useEffect(() => {
    async function fetchData() {
        const url = "http://localhost:8000/seats";
        const response = await fetch(url)
        const data = await response.json(); 
        dispatch({ type: "fetch-data", data });
        return data;
    }
      fetchData();
  }, [dispatch])

  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/finish" component={Finish} />
      </Switch>
    </Router>
    <Footer><h3>Hubert Kruk @ 2021</h3></Footer>
    </>
  );
}

export default App;
