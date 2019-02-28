import React, { Component } from 'react'
import CountryMap from './country_map';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dealers extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {'stateName' : 'CUNDINAMARCA'};
  }

  componentWillMount(){
    //id:14 cundinamarca
    this.props.fetchDataDepartment(14);
  }

  handleClick(geography, evt){
    this.props.fetchDataDepartment(geography.properties.ID_1);
    this.setState({'stateName' : geography.properties.NAME_1});
  }

  renderDealers(){
    var dealers = ( this.props.department !== undefined ) ? this.props.department.dealers : {}
    var rows = []

    for (let index = 0; index < dealers.length; index++) {
      const dealer = dealers[index];
      rows.push(
          <div key={dealer.id} className="item-dealer mb-4">
              <div className="city">
                {dealer.ciudad}
              </div>
              <div className="name">
                {dealer.name}
              </div>
              <div className="phone">
                {dealer.telefono}
              </div>
              <div className="address">
                {dealer.address}
              </div>
          </div>
      );
    }

    return rows;

  }

  render() {

    var classdiv = 'title';
    if( this.state.stateName.length > 15 ){
      classdiv = 'title-2';
    }

    return (
      <div className="dealers-container" >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="map">
                <CountryMap changeState={this.handleClick} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="dealer-list">
                <div className={`${classdiv} text-center`} >
                  { this.state.stateName}
                </div>
                <div className="content pr-4">
                  {this.renderDealers()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){

  return {
    department: state.data.department
  }
}

export default connect (mapStateToProps, actions)(Dealers);
