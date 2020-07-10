import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import WaterfallCreateUpdate from '../WaterfallCreateUpdate/WaterfallCreateUpdate';
import WaterfallsList from '../WaterfallsList/WaterfallsList';
import Header from '../Header/Header';

const BaseLayout = () => (
  <div className="container-fluid">
    <Header />
    <div className="content">
      <Route path="https://drmeloy.github.io/waterfalls-fe/" exact component={WaterfallsList}  />
      <Route path="https://drmeloy.github.io/waterfalls-fe/waterfalls/:id" component={WaterfallCreateUpdate}  />
      <Route path="https://drmeloy.github.io/waterfalls-fe/waterfalls/" exact component={WaterfallCreateUpdate}  />
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter basename='https://drmeloy.github.io/waterfalls-fe'>
      <BaseLayout />
    </BrowserRouter>
  );
}
