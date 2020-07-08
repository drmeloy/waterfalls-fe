import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WaterfallCreateUpdate from '../WaterfallCreateUpdate/WaterfallCreateUpdate';
import WaterfallsList from '../WaterfallsList/WaterfallsList';
import './App.css';

const BaseLayout = () => (
  <div className="container-fluid">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span>Waterfalls of Oregon!</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div  className="navbar-nav">
          <a className="nav-item nav-link" href="/">Waterfalls</a>
          <a className="nav-item nav-link" href="/waterfalls/">Create new waterfall</a>
        </div>
      </div>
    </nav>

    <div className="content">
      <Route path="/" exact component={WaterfallsList}  />
      <Route path="/waterfalls/:id" component={WaterfallCreateUpdate}  />
      <Route path="/waterfalls/" exact component={WaterfallCreateUpdate}  />
    </div>

  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
}
