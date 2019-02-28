import React, { Component } from 'react'
import logo from '../../../img/logo_footer.png';

export default class Confirm extends Component {

constructor(props) {
    super(props);
    this.state = {'message' : '¿eres mayor de edad para aventurarte en nuestro mundo de sabores?', 'confirm':true};
}

noConfirm(){
    this.setState({'message': 'Lo siento no tienes acceso a la pagina','confirm':false})
}

renderButtons(){
    var div = '';
    if(this.state.confirm){
        div = (
            <div>
                <div className="btn btn-rhin mr-2"  onClick={this.props.closeConfirm} >
                    SI
                </div>
                <div className="btn btn-rhin ml-2" onClick={ () => this.noConfirm() }>
                    NO
                </div>
            </div>
        );
    }
    return div;
}

render() {
    return (
        <div className="content-confirm">
            <div className="container body-confirm text-center">
                <div className="row">
                    <div className="col-12 ">
                        <img src={logo} className="logo" />
                    </div>
                    <div className="col-12 message">
                        {this.state.message}
                    </div>
                    <div className="col-12 buttons mt-3">
                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
