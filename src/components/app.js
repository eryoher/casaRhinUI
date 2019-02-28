import React, { Component } from 'react'
import Header from './common/header';
import Footer from './common/footer';
import Confirm from './common/confirm';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {'closed' : true};
  }

  handleClick(){
    this.setState({'closed':false});
    sessionStorage.setItem('closedConfirm', true);
  }

  componentWillMount(){
    var key = sessionStorage.getItem('closedConfirm');
    if(key){
      this.setState({'closed':false});
    }

  }

  renderConfirm(){
    if( this.state.closed ){
      return(
        <div className="confirm">
            <Confirm closeConfirm={this.handleClick} />
        </div>
      );
    }else{
      return null;
    }
  }

  render() {
    var classDiv = ( this.state.closed ) ? 'blur' : '';
    return (
      <div className="main-content">
        <div className={`header ${classDiv}`}>
          <Header />
        </div>
        <div className={`content-body ${classDiv}`}>
            {this.props.children}
        </div>
        <div className={`footer ${classDiv}`}>
         <Footer />
        </div>
        {this.renderConfirm()}
      </div>
    )
  }
}
