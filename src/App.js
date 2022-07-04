import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './layout/layout';

import RematesPage from './pages/rematesPage';
import LotesPage from './pages/lotesPage';
import FichaPage from './pages/fichaPage';
import Login from './pages/login';
import Register from './pages/register';
import Error from './pages/404';
import Proximamente from './pages/proximamente';









class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName: " ",
      logged: false
    }
  }
  handleUser = (e,c) => {
    this.setState( this.state = {
      ...this.state,
      logged: c,
      userName: e }
    );
    //this.forceUpdate()
  }
  handleLogout = () => {
    this.setState( this.state = {
      ...this.state,
      logged: false,
      userName: " " }
    );
  }
  render() {

   return(
     <BrowserRouter>
      <Layout data={this.state} handleLogout={this.handleLogout}>
          <Routes>
            <Route path='/' element={<RematesPage />}/>
            <Route path='/lote' element={<LotesPage />}/>
            <Route path='/remate/:remateId' element={<LotesPage />}/>
            <Route path='/remate/:remateId/lote/:loteId' element={<FichaPage />}/>
            <Route path='/login' element={   <Login handleUser={this.handleUser}/>  }  />
            <Route path='/register' element={<Register />}/>
            <Route path='*' element={<Error />}/>
            <Route path='/comingsoon' element={<Proximamente />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
     )
    }
}

export default App;
