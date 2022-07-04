import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


class Layout extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        <Header userName={this.props.data.userName} logged={this.props.data.logged} handleLogout={this.props.handleLogout} />
          <main>
            {this.props.children}
          </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout;
