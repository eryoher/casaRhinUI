import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router'


class Item extends Component {

    componentWillMount(){
        this.props.fetchDataItem( this.props.params.id );
    }

  render() {

    var iconInstagram ="../../../img/instagram_icon_white.png";
    var iconFacebook = "../../../img/facebook_icon_white.png";
    var item = this.props.item;
    if( item != undefined ){
        var divface = (<div className="icon facebook" style={{backgroundImage: `url(${iconFacebook})`}} />);
        var divInstagram = (<div className="icon instagram" style={{backgroundImage: `url(${iconInstagram})`}} />);
        if( item.facebook != '' ){
            divface = (
                <Link to={{ pathname: `${item.facebook}` }}  target="_blank">
                    {divface}
                </Link>
            )
        }
        if( item.instagram != '' ){
            divInstagram = (
                <Link to={{ pathname: `${item.instagram}` }}  target="_blank" disable="true">
                    {divInstagram}
                </Link>
            )
        }
        return (
            <div className="item-container" style={{backgroundImage: `url(${item.backgroundImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 item-description">
                            <div className="title pl-5">
                                {item.name}
                            </div>
                            <div className="subtitle pl-5 pb-3">
                                    {item.subtitle}
                                <div>
                                Alcohol <span className="alcohol"> {item.alcohol} </span>
                                </div>
                            </div>
                            <div className="content">
                                <div className="social-networks">
                                    {divface}
                                    {divInstagram}
                                </div>
                                <div className="notes-production pl-4">
                                    <div className="title mb-3 mt-0">
                                        NOTAS DE PRODUCCION
                                    </div>
                                    <div className="text-production mb-3">
                                        {item.notes}
                                    </div>
                                        <div className="footer-content">
                                            <div className="note-1">
                                                <Link to="/sensations" >
                                                    sensaciones del rhin
                                                </Link>
                                            </div>
                                            <div className="note-2">
                                                <Link to="/sensations" >
                                                    EXPERIMENTA NUESTRAS MEZCLAS
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return( <div></div> )
    }
  }
}

function mapStateToProps(state){
    return {
      item : state.data.item

    }
  }

  export default connect (mapStateToProps, actions)(Item);
