import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import WaterfallCreateUpdate from '../WaterfallCreateUpdate/WaterfallCreateUpdate';
import WaterfallsList from '../WaterfallsList/WaterfallsList';
import NavBar from '../NavBar/NavBar';

const BaseLayout = () => (
  <div className="container-fluid">
    <NavBar />
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
